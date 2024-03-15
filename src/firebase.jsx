// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlByYg5SzD7Skd_QnksCf77dnNRLxPYHc",
    authDomain: "lively-chatty.firebaseapp.com",
    projectId: "lively-chatty",
    storageBucket: "lively-chatty.appspot.com",
    messagingSenderId: "722878667402",
    appId: "1:722878667402:web:8617969b3239e6190d2b73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) ;
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)