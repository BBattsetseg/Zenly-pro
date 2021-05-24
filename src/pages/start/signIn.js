import React, { useEffect, useRef, useState } from "react";
import firebase, { auth } from "../../firebase";
import "./start.scss";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {

  const [input, setInput] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [sentCode, setSentCode] = useState(false);
  const [error, setError] = useState(null);
 
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const confirmationResult = useRef();
  const recaptchaVerifier = useRef();

  let user = props.user;
  let isLogin = props.isLogin;
  let setIsLogin = props.setIsLogin;

  useEffect(() => {
    // auth.languageCode = "mn";
    recaptchaVerifier.current = new firebase.auth.RecaptchaVerifier(
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
      confirmationResult.current = await auth.signInWithPhoneNumber(
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
    console.log("login ");
    try {
     await confirmationResult.current.confirm(confirmCode);

    } catch (error) {
      alert("code buruu");
    }
  };

  const onClickUrl = (url) => {
    history.push(url);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <div className="sing-container">
      <div className="row">
        {isLogin ? (
          <div className="sing-container">
            <div className="row">
              {/* <h1 className="red">{user.uid}</h1> */}
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i className="fas fa-user prefix"></i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label for="icon_prefix">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <i className="fas fa-mobile-alt prefix"></i>
                    <input
                      id="icon_telephone"
                      type="tel"
                      className="validate"
                    />
                    <label for="icon_telephone">Telephone</label>
                  </div>
                </div>
              </form>
              <button className="m-10"
                onClick={() => {
                  onClickUrl("/home");
                }}
              >
                HOME
              </button>
              <button className="m-10"
                onClick={() => {
                  onClickUrl("/profile");
                }}
              >
                profile
              </button>

              <button className="m-10" onClick={logout}>Гарах</button>
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
                  className="validate"
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
                    onClick={(e) => {
                      e.preventDefault();
                      // login && onClickUrl("/home");
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
        )}
      </div>
    </div>
  );
};

export default SignIn;
