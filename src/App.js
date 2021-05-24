import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import FriendRequest from "./pages/friend-req";
import { BrowserRouter, Route } from "react-router-dom";
import Start from "./pages/start";
import SignUp from "./pages/start/signUp.js";
import SignIn from "./pages/start/signIn.js";
import { useEffect, useState } from "react";
import firebase,{auth} from './firebase/index';


function App() {
  const [user, setUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [data,setData] = useState('')

  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        setUser({
            uid: user.uid,
            phone: user.phoneNumber,
          })
             // data .... from firebase uid-aar n 
          setIsLogin(true)

      } else {
        setUser(null)
        setIsLogin(false)
      }
    });

    return()=>{
      unsubscribe()
    }
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact>
          <Start />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/signIn">
          <SignIn user={user} isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/friends">
          <FriendRequest />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
