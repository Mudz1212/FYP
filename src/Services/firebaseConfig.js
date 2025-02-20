/*

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSJbdlbnDScnycbPiDVpwEpb4Xe6xMI3Q",
  authDomain: "echoesofpeace-6a05b.firebaseapp.com",
  projectId: "echoesofpeace-6a05b",
  storageBucket: "echoesofpeace-6a05b.appspot.com",
  messagingSenderId: "49544412213",
  appId: "1:49544412213:web:41da7a90e0ef00808ac57c",
  measurementId: "G-8RZ8ZVK0S5",
};

// ✅ Ensure Firebase is initialized only once
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// ✅ Initialize Firestore
export const db = getFirestore(app);
console.log("✅ Firestore initialized:", db);

// ✅ Initialize Firebase Authentication with AsyncStorage persistence
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  console.log("🔄 Initializing Firebase Auth with AsyncStorage persistence...");
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { auth, app };
*/
