import React from "react";
import "./start.scss";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const onClickUrl = (url) => {
    history.push(url);
  };

  return (
    <div className="sing-container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="fas fa-user prefix"></i>
              <input id="icon_prefix" type="text" className="validate" />
              <label for="icon_prefix">First Name</label>
            </div>
            <div className="input-field col s6">
              <i className="fas fa-mobile-alt prefix"></i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>

        <button
          onClick={() => {
            onClickUrl("/signIn");
          }}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignUp;
