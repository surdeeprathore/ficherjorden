// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgWLfFIf9dZUlfIipmuWGPk73ir7HfenY",
  authDomain: "ficherjorden.firebaseapp.com",
  projectId: "ficherjorden",
  storageBucket: "ficherjorden.firebasestorage.app",
  messagingSenderId: "30539065024",
  appId: "1:30539065024:web:7c8b0dd979f168f135af25",
  measurementId: "G-FZK7GXQ5VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);