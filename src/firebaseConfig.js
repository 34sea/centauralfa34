// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGd6H4qQwtCztRkgbf4JuZDFS8rojLrp8",
  authDomain: "martel-ebe43.firebaseapp.com",
  projectId: "martel-ebe43",
  storageBucket: "martel-ebe43.firebasestorage.app",
  messagingSenderId: "32409211992",
  appId: "1:32409211992:web:a380faf0360f48c5c0a62d",
  measurementId: "G-SF7DKPKJ71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
