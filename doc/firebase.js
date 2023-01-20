// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAeIdn_wou7rMqUIuxY8z-0tReVv4JS38",
  authDomain: "testakt-cd502.firebaseapp.com",
  projectId: "testakt-cd502",
  storageBucket: "testakt-cd502.appspot.com",
  messagingSenderId: "398057050204",
  appId: "1:398057050204:web:8fcd21986fea2a74329699",
  measurementId: "G-9RZRFKPKKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
