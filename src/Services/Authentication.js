import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSJbdlbnDScnycbPiDVpwEpb4Xe6xMI3Q",
  authDomain: "echoesofpeace-6a05b.firebaseapp.com",
  projectId: "echoesofpeace-6a05b",
  storageBucket: "echoesofpeace-6a05b.firebasestorage.app",
  messagingSenderId: "49544412213",
  appId: "1:49544412213:web:41da7a90e0ef00808ac57c",
  measurementId: "G-8RZ8ZVK0S5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
