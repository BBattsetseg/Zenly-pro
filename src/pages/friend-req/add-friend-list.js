import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import "./friend.scss";

const AddFriendList = (props) =>{
     const closeFriendList =()=>{
       console.log(props.setIsAddFriendLstOpen())
     }

     const [onaddFriendList, setonAddFriendList] = useState([]);

     useEffect(()=>{
       firestore.collection("tracking").onSnapshot((querySnapshot) => {
         const adds = [];
        querySnapshot.forEach((doc) => {
          adds.push(doc.data());
        });
        setonAddFriendList(adds);
      });
     },[])

    const onFriend = () =>{
      
    }

     const AddFriend=(props)=>{
      console.log(props) 
         return(
            <li className="collection-item avatar">
            <img
            src="https://images.unsplash.com/photo-1621293051751-6514b7f9515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80"
            alt=""
            className="circle"
            />
            <span className="title">{props.username}</span>
            <p>First Line</p>
            <a href="#!" className="secondary-content">
            <i className="fas fa-user-plus fa-2x " onClick={()=>{onFriend()}}></i>
            </a>
        </li> 
         )
     }
    return(
        <div className="container-friend  p-50">
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossOrigin="anonymous"
          ></link>
            <h4>YOU MAY KNOW</h4>
            <ul className="collection container list-container ">            
            {
              onaddFriendList.map((list)=> <AddFriend username = {list.username} buil/> )
            } 
                                 
            </ul>
            <i class="far fa-times-circle  fa-2x p-50" onClick={()=>{closeFriendList()}}></i>
        </div>
        )
    
}

export default AddFriendList



//yarn build