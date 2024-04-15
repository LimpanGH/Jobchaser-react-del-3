//! Kan även behöva installera: npm install --save-dev @firebase/rules-unit-testing @types/firebase för att det ska funka med typescript.
// Fick dock detta i terminalen: npm WARN deprecated @types/firebase@3.2.1: This is a stub types definition for Firebase API (https://www.firebase.com/docs/javascript/firebase). Firebase API provides its own type definitions, so you don't need @types/firebase installed!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "",
  API-Firebase: process.env.HI_MOM;,
  authDomain: "jobchaser-417d9.firebaseapp.com",
  projectId: "jobchaser-417d9",
  storageBucket: "jobchaser-417d9.appspot.com",
  messagingSenderId: "305064313585",
  appId: "1:305064313585:web:f8fcc37230cb9981eadf50",
  measurementId: "G-WEFQVC494N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};
