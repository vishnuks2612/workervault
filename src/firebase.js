// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRb-JgFBPl-lMHT4Gj7GD3RGZCmaApMag",
  authDomain: "workervault-7f12a.firebaseapp.com",
  projectId: "workervault-7f12a",
  storageBucket: "workervault-7f12a.appspot.com",
  messagingSenderId: "661570939117",
  appId: "1:661570939117:web:7be06c6b1e3a9c6fae04e4",
  measurementId: "G-1VJYCB1J8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()