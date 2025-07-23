import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZnW2guKejMjVkZQmq_oh_CDjZA16WjeI",
  authDomain: "eyegotask-8b5f2.firebaseapp.com",
  projectId: "eyegotask-8b5f2",
  storageBucket: "eyegotask-8b5f2.firebasestorage.app",
  messagingSenderId: "502221921797",
  appId: "1:502221921797:web:c7d63d3b9b0bb1a4c4866c",
  measurementId: "G-QT0M09188C"
};

const app = initializeApp(firebaseConfig)  ; 
export const auth = getAuth(app) ; 





