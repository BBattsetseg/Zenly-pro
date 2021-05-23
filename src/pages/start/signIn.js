import React, { useEffect, useRef, useState } from "react";
import firebase, { auth } from "../../firebase";
import "./start.scss";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [input, setInput] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [error, setError] = useState(null);
  const recaptcha = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // auth.languageCode = "mn";
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "normal",
        // 'size': 'invisible',
        // 'callback': (response) => {
        //     onSignInSubmit();
        // }
      }
    );

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

  const sendCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    try {
      window.confirmationResult = await auth.signInWithPhoneNumber(
        `+976 ${input}`,
        appVerifier
      );
      setSentCode(true);
    } catch (e) {
      if (e.code === "auth/invalid-phone-number") {
        alert("Wrong phone number!");
      }
      setError(e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      let result = await window.confirmationResult.confirm(confirmCode);
      console.log(result.user.phoneNumber);
      setIsLogin(true);
    } catch (error) {
      alert("code buruu");
    }
  };

  const onClickUrl = (url) => {
    history.push(url);
  };

  const logout = async () => {
    await auth.signOut();
    setIsLogin(false);
  };

  return (
    <div className="sing-container">
      <div className="row">
        {isLogin ? (
          <div className="sing-container">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="fas fa-user prefix"></i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label for="icon_prefix">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <i class="fas fa-mobile-alt prefix"></i>
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label for="icon_telephone">Telephone</label>
                  </div>
                </div>
              </form>
              <button
                onClick={() => {
                  onClickUrl("/home");
                }}
              >
                HOME
              </button>
              <button
                onClick={() => {
                  onClickUrl("/profile");
                }}
              >
                profile
              </button>
              <button onClick={logout}>Гарах</button>
            </div>
          </div>
        ) : (
          <form className="col s12">
            <div className="row">
              <h1>Welcome Zenly</h1>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <i className="fas fa-mobile-alt prefix"></i>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  id="icon_telephone"
                  type="tel"
                  class="validate"
                />
                <label for="icon_telephone">Phone</label>
                <span className="helper-text">Please enter a phone number</span>
              </div>
              {sentCode && (
                <div className="input-field col s6">
                  <i className="fas fa-user prefix"></i>
                  <input
                    value={confirmCode}
                    onChange={(event) => {
                      setConfirmCode(event.target.value);
                    }}
                    id="icon_prefix"
                    type="text"
                    className="validate"
                  />
                  <label for="icon_prefix">Batalgaajuulah</label>
                  <button
                    onClick={() => {
                      login && onClickUrl("/home");
                
                    }}
                  >
                    Нэвтрэх
                  </button>
                </div>
              )}
              {!sentCode && (
                <div className="row">
                  <div className="input-field col s6 offset-s3">
                    <div id="sign-in-button" />
                    <button onClick={sendCode}> Continue </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
