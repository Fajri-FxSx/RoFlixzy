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
  apiKey: "AIzaSyCVkaw4tud34OWGW-jlm1OE6yKmnsC2mXU",
  authDomain: "roflix-5e52a.firebaseapp.com",
  projectId: "roflix-5e52a",
  storageBucket: "roflix-5e52a.appspot.com",
  messagingSenderId: "426326267596",
  appId: "1:426326267596:web:906b6f5b5b4cee1b045469",
  measurementId: "G-YBX6V58WYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);