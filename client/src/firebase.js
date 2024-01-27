// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fc639.firebaseapp.com",
  projectId: "mern-blog-fc639",
  storageBucket: "mern-blog-fc639.appspot.com",
  messagingSenderId: "705874926223",
  appId: "1:705874926223:web:b399e8ee1d02a3954eeefa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
