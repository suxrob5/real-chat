import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyC33VVQMylEyoZPPvn6sE5IW0J54xf5eDg",
  authDomain: "chat-ae5df.firebaseapp.com",
  projectId: "chat-ae5df",
  storageBucket: "chat-ae5df.appspot.com",
  messagingSenderId: "785362854015",
  appId: "1:785362854015:web:63b9a9f3645c0677df9f4a",
  measurementId: "G-B9LVJMCPRY",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
