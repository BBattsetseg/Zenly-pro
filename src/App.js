import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import FriendRequest from "./pages/friend-req";
import { Redirect, Route, useHistory } from "react-router-dom";
import Start from "./pages/start";
import SignUp from "./pages/start/signUp.js";
import SignIn from "./pages/start/signIn.js";
import { useEffect, useState } from "react";
import firebase,{auth, firestore} from './firebase/index';


const App = () => {
  const [user, setUser] = useState({
    userName: {},
    id: {},
    hidden: {},
    email: {},
    photo: {},
    phone: {},
    birthday: {},
    password: {}

  });

  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(()=>{
    const unsubscribe =  firebase.auth().onAuthStateChanged( async (user)=>{
      if(!user) {
        setUser({})
        setIsLogin(false)

      } else {
          var dataRef = await firestore.collection("users").doc(`${user.uid}`).get();
          let data = dataRef.data();
          console.log(data);

         if(!dataRef.exists){
          setUser({
            uid: user.uid,
            phone: user.phoneNumber
          })
          history.push('/profile')

         } else {
           setUser({
             uid: user.uid,
             phone: user.phoneNumber, 
             ...data
           })
         }

        setIsLogin(true)
      } 
    });

    return()=>{
      unsubscribe()
    }
  },[]);

  return (
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
            isLogin &&   <Profile user={user} setUser={setUser}/>
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
  );
}

export default App;
