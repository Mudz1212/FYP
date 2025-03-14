import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuthentication } from "../../Hooks/useAuthentication";

const DiaryIntroPage = () => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useAuthentication();
  const navigation = useNavigation(); // Get navigation here

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}
      >
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Welcome Back!</Text>
      <Text style={styles.instruction}>
        Enter your email and password below
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin(navigation)} // Pass navigation to handleLogin
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
        <Text style={styles.noaccount}>
          Don't have an account? Click here to sign up
        </Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        This is top secret, so remember not to share your password with anyone.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
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
  subtitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d4a373",
    marginBottom: 25,
    marginTop: 50,
  },
  instruction: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#ffe4b5",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 12,
    fontSize: 17,
    color: "#333",
  },
  loginButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#d4a373",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  note: {
    fontSize: 15,
    color: "#444",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 22,
  },
  noaccount: {
    fontSize: 15,
    color: "#007AFF",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "500",
  },
});

export default DiaryIntroPage;
