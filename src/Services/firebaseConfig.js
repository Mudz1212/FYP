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
  apiKey: "AIzaSyAAUyb3DtWwJeof_wDmep1VxnURf-oBvbE",
  authDomain: "newechoesofpeace.firebaseapp.com",
  projectId: "newechoesofpeace",
  storageBucket: "newechoesofpeace.appspot.com", // ✅ Fixed storage bucket
  messagingSenderId: "402810690819",
  appId: "1:402810690819:web:558f0bc4056dee89df1d36",
  measurementId: "G-W5Y8BGE9R2",
};

// ✅ Initialize Firebase App (Avoids Duplicate Initialization)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// ✅ Initialize Firestore Directly (No Need for `enableFirestore`)
const db = getFirestore(app);

// ✅ Initialize Firebase Auth with AsyncStorage persistence
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  console.log("🔄 Initializing Firebase Auth with AsyncStorage persistence...");
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

// ✅ Export Firebase Modules (No Need for `enableFirestore`)
export { auth, app, db };
