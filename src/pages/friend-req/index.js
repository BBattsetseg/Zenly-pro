import React from "react";
import "./friend.scss";

const FriendRequest = (props) => {
  return (
    <div className="f-container">
      <div className="friend-container">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        ></link>
        <div className="container-friend">
          <div className="row">
            <div className="col m6">
              <h3>
                <b>FRIENDS</b>
              </h3>
            </div>
            <div className="col m6">
              <button className="btn-small">+ ADD FRIENDS</button>
            </div>
          </div>
          <nav className="container grey">
            <div className="nav-wrapper">
              <form>
                <div className="input-field  grey">
                  <input id="search" type="search" required />
                  <label className="label-icon" htmlFor="search">
                    <i className="fas fa-search"></i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
          <div className="row container">
            <h5 className=" left grey-text">YOU MIGHT KHOW THEM</h5>
          </div>
          <ul className="collection container">
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x "></i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x "></i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x "></i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x"></i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x "></i>
              </a>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
                alt=""
                className="circle"
              />
              <span className="title">Title</span>
              <p>First Line</p>
              <a href="#!" className="secondary-content">
                <i className="fas fa-user-plus fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
