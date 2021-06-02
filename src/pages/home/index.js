import React, { useEffect, useRef } from "react";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/index.js";
import Google from "../google";
const Home = () => {
  let history = useHistory();
  let profileImgRef = useRef();

  const onClickUrl = (url) => {
    history.push(url);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <div className="home-container">
      <Google />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossOrigin="anonymous"
      ></link>
      <div className="container">
        <button className="lenses-icon">
          <i className="fas fa-clone fa-3x"></i>
        </button>
        <button className="footprints-icon" onClick={logout}>
          <i className="fas fa-sign-out-alt fa-3x"></i>
        </button>
        <button ref={profileImgRef} className="person-location-icon">
          {/* <image className="pro-image"></image> */}
        </button>
        <button className="world-icon">
          <i className="fas fa-globe-americas fa-3x"></i>
        </button>
        <button className="message-icon">
          <i className="fas fa-comment-dots fa-3x"></i>
        </button>
        <button
          className="add-friend-icon"
          onClick={() => onClickUrl("/friends")}
        >
          <i className="fas fa-plus-square fa-3x"></i>
        </button>
        <button className="profile-icon" onClick={() => onClickUrl("/profile")}>
          <i className="fas fa-user fa-3x"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
