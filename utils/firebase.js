// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmNkT78D5ZGTKE_cDbsow8aMuU8jTT1Kw",
  authDomain: "skeleton-practice.firebaseapp.com",
  projectId: "skeleton-practice",
  storageBucket: "skeleton-practice.appspot.com",
  messagingSenderId: "264525631733",
  appId: "1:264525631733:web:c1bb9abd245db6555135bc",
  measurementId: "G-NHGNE9KDKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
