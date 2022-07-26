// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo2Fj2YrYJiL964xTmmJYFZYJ8IzmdGAw",
  authDomain: "ror3x-7962d.firebaseapp.com",
  databaseURL: "https://ror3x-7962d-default-rtdb.firebaseio.com",
  projectId: "ror3x-7962d",
  storageBucket: "ror3x-7962d.appspot.com",
  messagingSenderId: "762153396713",
  appId: "1:762153396713:web:2c6c0e3a31e234ca4a0378",
  measurementId: "G-YWW4HC59KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);