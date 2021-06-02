import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import FriendRequest from "./pages/friend-req";
import { Redirect, Route, useHistory } from "react-router-dom";
import Start from "./pages/start";
import SignUp from "./pages/start/signUp.js";
import SignIn from "./pages/start/signIn.js";
import { useContext, useEffect, useState } from "react";
import firebase, { auth, firestore } from "./firebase/index";
import {UserContext} from './context';

const App = () => {
  const [user, setUser] = useState({
    userName: {},
    id: {},
    hidden: {},
    email: {},
    photo: {},
    phone: {},
    birthday: {},
    password: {},
  });

  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        setUser({});
        setIsLogin(false);
      } else {
        const dataRef = await firestore
          .collection("users")
          .doc(`${user.uid}`)
          .get();

        if (!dataRef.exists) {
          setUser({
            uid: user.uid,
            phone: user.phoneNumber,
          });
          history.replace("/profile");
        } else {
          setUser({
            uid: user.uid,
            phone: user.phoneNumber,
            ...(dataRef.data() || {}),
          });
        }

        setIsLogin(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Route path="/" exact>      
        <Start />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/signIn">
          <SignIn  isLogin={isLogin} />
        </Route>
        <Route path="/home">
          {isLogin && <Home />}
          {!isLogin && <Redirect to="/" exact />}
        </Route>
        <Route path="/profile">
          {isLogin && <Profile />}
          {!isLogin && <Redirect to="/" exact />}
        </Route>
        <Route path="/friends">
          {isLogin && <FriendRequest />}
          {!isLogin && <Redirect to="/" exact />}
        </Route>
      </UserContext.Provider>
    </div>
  );
};

export default App;
