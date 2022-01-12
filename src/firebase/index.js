import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyClsqxQ3kKwx3zklxxkBqh-i2eE4Z_hh5g",
  authDomain: "list-todo-personal.firebaseapp.com",
  projectId: "list-todo-personal",
  storageBucket: "list-todo-personal.appspot.com",
  messagingSenderId: "756631768915",
  appId: "1:756631768915:web:26f4843ef4a2da96319ba6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = getFirestore();