import React, { useState, useRef, useEffect } from 'react';
import firebase, { firestore, auth } from './index'

const Exp = () => {
  const [input, setInput] = useState('');
  const [sentCode, setSentCode] = useState(false);
  const [confirmCode, setConfirmCode] = useState('');
  const [error, setError] = useState(null);
  const recaptcha = useRef(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.languageCode = "mn";
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptcha.current);
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth]);

  const sendCode = async () => {
    setError(null);
    const appVerifier = window.recaptchaVerifier;
    try {
      window.confirmationResult = await auth.signInWithPhoneNumber(`+976 ${input}`, appVerifier)
      setSentCode(true);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  const login = async () => {
    try {
      let result = await window.confirmationResult.confirm(confirmCode);
      console.log("Hi" + result.user.phoneNumber);
      setIsLogin(true);
    } catch (error) {
      alert("Код буруу");
    }
  }
  const logout = async () => {
    await auth.signOut();
    setIsLogin(false);
  }

  return (
    <div className="App">
      {
        isLogin && <button onClick={logout}> Гарах</button>
      }
      {error && <span> {error}</span>}
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <div ref={recaptcha} />
      {
        !sentCode && <button onClick={sendCode}>Үргэлжлүүлэх</button>
      }
      {
        sentCode && (
          <>
            <input value={confirmCode} onChange={(event) => setConfirmCode(event.target.value)} placeholder="Баталгаажуулах" />
            <button onClick={login}>Нэвтрэх</button>
          </>
        )
      }
    </div>
  )
}

export default Exp;