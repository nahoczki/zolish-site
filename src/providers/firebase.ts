// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // PUT FIREBASE CONFIG HERE
    apiKey: "AIzaSyD6Lm-XorRC39yQx0fQaWASgq0-8UlQy30",
    authDomain: "personal-sitev2.firebaseapp.com",
    projectId: "personal-sitev2",
    storageBucket: "personal-sitev2.appspot.com",
    messagingSenderId: "834631626713",
    appId: "1:834631626713:web:236ed87f3dc558417833c8",
    measurementId: "G-KYJ3S6KRYK"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);