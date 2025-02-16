import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "../../Services/Authentication";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Make sure everything is filled in correctly.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d).{7,}$/;

    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Invalid email format. Please enter a valid email.");
      return;
    }

    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 7 characters long and contain at least one number."
      );
      return;
    }

    setLoading(true);
    const result = await registerUser(email, password);

    if (result.success) {
      Alert.alert("Success!", "Account created successfully.");
      navigation.navigate("DiaryIntro");
    } else {
      Alert.alert("Error", result.message);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Signing Up..." : "Sign Up"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DiaryIntro")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "transparent",
    padding: 10,
  },
  menuIcon: {
    fontSize: 32,
    color: "#d4a373",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4a373",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#ffe4b5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#d4a373",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 15,
    fontSize: 16,
    color: "#d4a373",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignUpPage;
