// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmp2KiwOsasb3hGy408OY6H7LbIyUAnnE",
  authDomain: "to-do-app4103.firebaseapp.com",
  projectId: "to-do-app4103",
  storageBucket: "to-do-app4103.appspot.com",
  messagingSenderId: "662325934397",
  appId: "1:662325934397:web:d838b7e8a53ff5eedaad54",
  measurementId: "G-TKRZMZJ301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)