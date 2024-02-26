// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLlIxB3m6iL3HfYBfRyjvvaQfcqQ8gAX8",
  authDomain: "moritz-blockchain-fileupload.firebaseapp.com",
  projectId: "moritz-blockchain-fileupload",
  storageBucket: "moritz-blockchain-fileupload.appspot.com",
  messagingSenderId: "622046675605",
  appId: "1:622046675605:web:83dc6ed277ff4005e3d19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)