import firebase from "firebase/app";
import "firebase/firestore";
import  "firebase/auth";

var firebaseConfig = {
  // apiKey: "AIzaSyBVwyUcJ7BKsGriB6SH8yBaE7sSTTY_SOQ",
  // authDomain: "zenly-22351.firebaseapp.com",
  // projectId: "zenly-22351",
  // storageBucket: "zenly-22351.appspot.com",
  // messagingSenderId: "454798558612",
  // appId: "1:454798558612:web:97ef4e8ca7e72d26173b81",

    apiKey: "AIzaSyC7eHvHD9OXVIEUU1K_KyavzPfhdkhZYaM",
    authDomain: "leaply-nest.firebaseapp.com",
    projectId: "leaply-nest",
    storageBucket: "leaply-nest.appspot.com",
    messagingSenderId: "294575023785",
    appId: "1:294575023785:web:a8cda7dfa764fa86a9abb8"
};




firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
