// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC686UgCFKsmpHHU417xzgnRCJzIwWFwCs",
  authDomain: "desafio-evaluado-d8bba.firebaseapp.com",
  projectId: "desafio-evaluado-d8bba",
  storageBucket: "desafio-evaluado-d8bba.firebasestorage.app",
  messagingSenderId: "202824150213",
  appId: "1:202824150213:web:682d79c90848a6a0f2d4ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app