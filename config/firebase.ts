// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebase_key } from "@/utils/secret";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebase_key,
  authDomain: "ourstory-a7020.firebaseapp.com",
  projectId: "ourstory-a7020",
  storageBucket: "ourstory-a7020.firebasestorage.app",
  messagingSenderId: "125214697442",
  appId: "1:125214697442:web:8c03415ffaf50f10917bbb",
  measurementId: "G-RYCDN2QZKS"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}