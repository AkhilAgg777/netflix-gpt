// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw6mjfQ-6L5h1DZsxYtjvvFH6lwkXubYQ",
  authDomain: "netflixgpt-e3c68.firebaseapp.com",
  projectId: "netflixgpt-e3c68",
  storageBucket: "netflixgpt-e3c68.appspot.com",
  messagingSenderId: "344220677242",
  appId: "1:344220677242:web:9e7d8d12dfda06a44bf7c3",
  measurementId: "G-5PSH2YK42J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
