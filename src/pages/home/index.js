import React from "react";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const onClickUrl = (url) => {
    history.push(url);
  };

  return (
    <div className="home-container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      ></link>
      <div className="container">
        <h1 className="text-center country">MONGOLIA</h1>
        <button className="lenses-icon">
          <i className="fas fa-clone fa-3x"></i>
        </button>
        <button className="footprints-icon">
          <i className="fas fa-crown fa-3x"></i>
        </button>
        <button className="person-location-icon">
          <i className="far fa-dot-circle fa-3x"></i>
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
