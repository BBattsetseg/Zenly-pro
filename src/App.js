import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import FriendRequest from "./pages/friend-req";
import { BrowserRouter, Redirect, Route, useHistory } from "react-router-dom";
import Start from "./pages/start";
import SignUp from "./pages/start/signUp.js";
import SignIn from "./pages/start/signIn.js";
import { useEffect, useState } from "react";
import firebase,{auth, firestore} from './firebase/index';


function App() {
  const [user, setUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        setUser({
            uid: user.uid,
            phone: user.phoneNumber,         
          })

          var userRef = firestore.collection("users");
          userRef.doc(`${user.uid}`).get().then((doc)=>{
            if(doc.exists){
              history.push('/home')
            } else {
              history.push('/profile')
            }
           console.log(doc)
          })

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
          {
            isLogin &&  <Home />
          }
          {
            !isLogin &&  <Redirect  to="/" exact/>
          }       
        </Route>
        <Route path="/profile">
          {
            isLogin &&   <Profile user={user}/>
          }
          {
            !isLogin &&  <Redirect  to="/" exact/>
          }    
        </Route>
        <Route path="/friends">
          {
            isLogin &&   <FriendRequest user={user}/>
          }
          {
            !isLogin &&  <Redirect  to="/" exact/>
          } 
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
