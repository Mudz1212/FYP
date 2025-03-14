import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginUser, registerUser } from "../Services/Authentication";

export const useAuthentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (navigation) => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Email and password fields cannot be empty.");
      return;
    }

    const result = await loginUser(email, password);
    if (result.success) {
      navigation.navigate("CalendarPage"); // Pass navigation here
    } else {
      Alert.alert("Incorrect Login", result.message);
    }
  };

  const handleSignUp = async (navigation) => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Make sure everything is filled in correctly.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d).{7,}$/;

    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Invalid email format.");
      return;
    }

    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 7 characters with a number."
      );
      return;
    }

    const result = await registerUser(email, password);
    if (result.success) {
      Alert.alert("Success!", "Account created successfully.");
      navigation.navigate("DiaryIntro");
    } else {
      Alert.alert("Error", result.message);
    }
  };

  return { email, setEmail, password, setPassword, handleLogin, handleSignUp };
};
