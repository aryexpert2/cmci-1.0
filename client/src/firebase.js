// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cmci-1-0.firebaseapp.com",
  projectId: "cmci-1-0",
  storageBucket: "cmci-1-0.appspot.com",
  messagingSenderId: "80824166935",
  appId: "1:80824166935:web:24c06c35162e8132ff0a52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);