// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2RIj144GF-hPa5SAWzV8hhieULsavIs",
  authDomain: "rosy-hope-454305-a9.firebaseapp.com",
  projectId: "rosy-hope-454305-a9",
  storageBucket: "rosy-hope-454305-a9.firebasestorage.app",
  messagingSenderId: "769479697806",
  appId: "1:769479697806:web:c568f63b0fc9591da5b0df",
  measurementId: "G-6274T344NW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);