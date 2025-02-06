// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzkBGu2M3DU-BQ1-R-LLWmxKpQ8nmqLac",
  authDomain: "react-expense-test-91804.firebaseapp.com",
  projectId: "react-expense-test-91804",
  storageBucket: "react-expense-test-91804.firebasestorage.app",
  messagingSenderId: "603985256235",
  appId: "1:603985256235:web:252c467451370cf4be2f6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy