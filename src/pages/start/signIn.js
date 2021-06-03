import React, { useContext, useEffect, useRef, useState } from "react";
import firebase, { auth } from "../../firebase";
import "./start.scss";
import { Redirect, useHistory } from "react-router-dom";
import {UserContext} from '../../context';

const SignIn = (props) => {
  const [input, setInput] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const confirmationResult = useRef();
  const recaptchaVerifier = useRef(); //recaptcha

  let user = useContext(UserContext);
  let isLogin = props.isLogin;

  if(isLogin ){
    history.push('/profile');
    
  }

  useEffect(() => {
    // auth.languageCode = "mn";
    recaptchaVerifier.current = new firebase.auth.RecaptchaVerifier(     //recaptcha object uusgej bn
      "sign-in-button",   
      {
        size: "normal",
      }
    );
  }, []);

  const sendCode = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      confirmationResult.current = await auth.signInWithPhoneNumber(     // utsand irsn code
        `+976 ${input}`,
        recaptchaVerifier.current
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
      await confirmationResult.current.confirm(confirmCode);  //code-iin shalgaad, user -eer burtgej bga
    } catch (error) {
      alert("code buruu");
    }
  };

  return (
    <div className="sing-container">
      <div className="row">
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
                  className="validate"
                />
                <label htmlFor="icon_telephone">Phone</label>
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
                  <label htmlFor="icon_prefix">Batalgaajuulah</label>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      login();
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
      </div>
    </div>
  );
};

export default SignIn;
