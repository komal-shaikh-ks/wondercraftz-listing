// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ZZaDNCVETmDRYjFC84TypkJ1JY_OeGk",
  authDomain: "wondercraftz-listing.firebaseapp.com",
  projectId: "wondercraftz-listing",
  storageBucket: "wondercraftz-listing.firebasestorage.app",
  messagingSenderId: "462551262610",
  appId: "1:462551262610:web:2f1116e2e347c1091d8d4b",
  measurementId: "G-V9HY2MRCJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);