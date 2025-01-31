// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSJbdlbnDScnycbPiDVpwEpb4Xe6xMI3Q",
  authDomain: "echoesofpeace-6a05b.firebaseapp.com",
  projectId: "echoesofpeace-6a05b",
  storageBucket: "echoesofpeace-6a05b.firebasestorage.app",
  messagingSenderId: "49544412213",
  appId: "1:49544412213:web:41da7a90e0ef00808ac57c",
  measurementId: "G-8RZ8ZVK0S5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
