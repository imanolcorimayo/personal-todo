// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClsqxQ3kKwx3zklxxkBqh-i2eE4Z_hh5g",
  authDomain: "list-todo-personal.firebaseapp.com",
  projectId: "list-todo-personal",
  storageBucket: "list-todo-personal.appspot.com",
  messagingSenderId: "756631768915",
  appId: "1:756631768915:web:26f4843ef4a2da96319ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = app.firestore()