import React from "react";
import "./profile.scss";
import M from "materialize-css/dist/js/materialize";

const Profile = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelector(".datepicker");
    var instance = M.Datepicker.init(elems, "");
    instance.toString();
  });

  return (
    <div className="profile-container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      ></link>
      <div className="container-profile">
        <div className="profile-content">
          <div className="icons">
            <i class="fas fa-cog fa-3x"></i>
          </div>
          <div className="row ">
            <div className="col l8 m7 s12 white">
              <div className="row ">
                <div class="input-field col l6 m9 s11 m-left profile-items">
                  <i class="fas fa-user prefix"></i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix">First Name</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col l6 m9 s11 m-left profile-items">
                  <i class="fas fa-mobile-alt prefix"></i>
                  <input id="icon_telephone" type="tel" class="validate" />
                  <label for="icon_telephone">Telephone</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col l6 m9 s11 m-left profile-items">
                  <i class="far fa-envelope prefix"></i>
                  <input id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col l6 m9 s11 m-left profile-items">
                  <input type="text" class="datepicker" />
                  <label for="date">Birthdate</label>
                </div>
              </div>
              <div className="row">
                <div class="input-field col l6 m9 s11 m-left profile-items">
                  <i class="fas fa-eye prefix"></i>
                  <input id="password" type="password" class="validate" />
                  <label for="password">Password</label>
                </div>
              </div>
            </div>
            <div className="col l3 m4 s12 profile-input-picture">
              <div className="camera-icon">
                <i class="fas fa-camera fa-2x"></i>
              </div>
            </div>
          </div>
          <button className="save-profile">SAVE PROFILE</button>
          {/* <div className="row"> 
                            <div className="profile-icons">
                                <button className="message-icon"><i className="fas fa-comment-dots fa-3x" ></i></button>
                                <button className="world-icon"><i className="fas fa-globe-americas fa-3x" ></i></button>
                                <button className="profile-icon"><i className="fas fa-user fa-3x" ></i></button>
                            </div>
                        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
