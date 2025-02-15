import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSJbdlbnDScnycbPiDVpwEpb4Xe6xMI3Q",
  authDomain: "echoesofpeace-6a05b.firebaseapp.com",
  projectId: "echoesofpeace-6a05b",
  storageBucket: "echoesofpeace-6a05b.appspot.com",
  messagingSenderId: "49544412213",
  appId: "1:49544412213:web:41da7a90e0ef00808ac57c",
  measurementId: "G-8RZ8ZVK0S5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("✅ Firestore initialized:", db);

let auth;
try {
  auth = getAuth(app);
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: "Incorrect email or password. Please try again.",
    };
  }
};

export { auth, app };
