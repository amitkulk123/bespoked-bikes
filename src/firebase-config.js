// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAp_QNiv_Estafq431T1PuH-Fd17yMDdQs",
  authDomain: "fir-tutorial-98eae.firebaseapp.com",
  projectId: "fir-tutorial-98eae",
  storageBucket: "fir-tutorial-98eae.appspot.com",
  messagingSenderId: "78848987303",
  appId: "1:78848987303:web:cfc385efd7018d4db20b82",
  measurementId: "G-6WLDZC9HH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
