// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-19b34.firebaseapp.com",
    projectId: "mern-auth-19b34",
    storageBucket: "mern-auth-19b34.appspot.com",
    messagingSenderId: "472313682436",
    appId: "1:472313682436:web:2bbfdc895370a7d4b4f351"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
