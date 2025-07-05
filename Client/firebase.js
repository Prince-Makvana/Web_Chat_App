// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO1uM8z2y_TEW6IkmO6nT1y_B8hgNRuDY",
  authDomain: "web-chat-9406b.firebaseapp.com",
  projectId: "web-chat-9406b",
  storageBucket: "web-chat-9406b.firebasestorage.app",
  messagingSenderId: "897201992718",
  appId: "1:897201992718:web:76325cf7b64e6de2d7385f",
  measurementId: "G-6P6CGQ69H6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);