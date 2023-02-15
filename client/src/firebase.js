// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9GVMXXSsRPryr1q_VqPxpoce6bTQiE1U",
  authDomain: "company-case-fb557.firebaseapp.com",
  projectId: "company-case-fb557",
  storageBucket: "company-case-fb557.appspot.com",
  messagingSenderId: "76547198432",
  appId: "1:76547198432:web:3d67f139757cfe388a6f85",
  measurementId: "G-SXLV346D02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
