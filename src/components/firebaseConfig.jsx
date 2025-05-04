import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoY4E9dysO2hRU9Sg7pOMlM26l_gzI2-M",
    authDomain: "codecommerce-11d8d.firebaseapp.com",
    projectId: "codecommerce-11d8d",
    storageBucket: "codecommerce-11d8d.firebasestorage.app",
    messagingSenderId: "53784684016",
    appId: "1:53784684016:web:715d456718273f3a31e935",
    measurementId: "G-7WSBM3ND3S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);