import React from "react";
import "./start.scss";
import { useHistory } from "react-router-dom";

const Start = () => {
  const history = useHistory();
  const onClickUrl = (url) => {
    history.push(url);
  };
  return (
    <div className="sing-container">
      <div>
        <h1>Zenly</h1>
        <h4>YOUR MAP, YOUR PEOPLE</h4>
        <div>
          <button
            onClick={() => {
              onClickUrl("/signIn");
            }}
          >
            SIGN IN
          </button>
        </div>
        <br />
        <div>
          <button
            className="white-text"
            onClick={() => {
              onClickUrl("/signUp");
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
