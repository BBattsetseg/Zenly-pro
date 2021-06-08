import React, { useContext, useRef, useState } from "react";
import "./profile.scss";
import M from "materialize-css/dist/js/materialize";
import firebase, { firestore, auth } from "../../firebase/index.js";
import { useHistory } from "react-router";
import { UserContext } from "../../context";

const Profile = () => {
  let user = useContext(UserContext);
  const history = useHistory();
  const [profile, setProfile] = useState({});

  // document.addEventListener("DOMContentLoaded", function () {
  //   let elems = document.getElementsByClassName("datepicker");
  //   elems.forEach((el) => {
  //     let instance = M.Datepicker.init(el, { format: "m/d/yyyy" });
  //     instance.toString();
  //   });
  // });

  const getInput = (field) => {
    return (e) => {
      setProfile({
        ...profile,
        [field]: e.target.value,
      });
    };
  };

  const onClickUrl = (url) => {
    history.push(url);
  };

 
  const onSubmit = (e) => {
    e.preventDefault();
    var userRef = firestore.collection("users");
    userRef
      .doc(`${user.uid}`)
      .set(profile, { merge: true })
      .then(alert("saved successfully !"))
      .catch(() => {});
  };

  return (
    <div className="profile-container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossOrigin="anonymous"
      ></link>
      <div className="container-profile">
        <div className="profile-content">
          <div className="icons">
            <i className="fas fa-cog fa-3x"></i>
          </div>
          <form onSubmit={onSubmit}>
            <div className="row ">
              <div className="col l8 m7 s12 white">
                <div className="row ">
                  <div className="input-field col l6 m9 s11 m-left profile-items">
                    <i className="fas fa-user prefix"></i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      onChange={getInput("username")}
                      value={user.username}
                      placeholder="Username"
                    />
                    <label htmlFor="icon_prefix"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col l6 m9 s11 m-left profile-items">
                    <i className="fas fa-mobile-alt prefix"></i>
                    <input
                      id="icon_telephone"
                      type="tel"
                      className="validate"
                      onChange={getInput("telephone")}
                      value={user.phone}
                      placeholder="Telephone"
                    />
                    <label htmlFor="icon_telephone"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col l6 m9 s11 m-left profile-items">
                    <i className="far fa-envelope prefix"></i>
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      onChange={getInput("email")}
                      value={user.email}
                      placeholder="Email"
                    />
                    <label htmlFor="email"></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col l6 m9 s11 m-left profile-items">
                    <input
                      type="text"
                      name="startDate"
                      className="datepicker"
                      onChange={getInput("birthDate")}
                      value={user.birthDate}
                      placeholder="Birthdate"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col l6 m9 s11 m-left profile-items">
                    <i className="fas fa-eye prefix"></i>
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      onChange={getInput("password")}
                      value={user.password}
                      placeholder="password"
                    />
                    <label htmlFor="password"></label>
                  </div>
                </div>
              </div>
              <div className="col l3 m4 s12 profile-input-picture">
                <div className="camera-icon">
                  <i className="fas fa-camera fa-2x"></i>
                </div>
              </div>
            </div>
            <button className="save-profile" type="submit">
              SAVE PROFILE
            </button>
          </form>
          <div className="row">
            <div className="profile-icons">
              <button className="message-icon">
                <i className="fas fa-comment-dots fa-3x"></i>
              </button>
              <button className="world-icon">
                <i
                  className="fas fa-globe-americas fa-3x"
                  onClick={() => {
                    onClickUrl("/home");
                  }}
                ></i>
              </button>
              <button className="profile-icon">
                <i
                  className="fas fa-user-friends fa-3x"
                  onClick={() => {
                    onClickUrl("/friends");
                  }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
