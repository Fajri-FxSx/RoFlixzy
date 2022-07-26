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
  apiKey: "AIzaSyBtImuktgJ7vCOltVuYxlbBEqpDMjHu1bc",
  authDomain: "fajri-003.firebaseapp.com",
  projectId: "fajri-003",
  storageBucket: "fajri-003.appspot.com",
  messagingSenderId: "306157272098",
  appId: "1:306157272098:web:2ffb9dc0771ed57cc2de7b",
  measurementId: "G-J2HJM08Z44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);