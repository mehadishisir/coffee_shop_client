// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDixyJByedwqhllej3BswaNGwe__oprk",
  authDomain: "coffee-store-auth-acf5f.firebaseapp.com",
  projectId: "coffee-store-auth-acf5f",
  storageBucket: "coffee-store-auth-acf5f.firebasestorage.app",
  messagingSenderId: "972338054716",
  appId: "1:972338054716:web:2a2123e76fabb50adae539",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
