import { StyleSheet, View, Text } from "react-native";

const Footer = () => {
  // Initialisations --------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Echoes of Peace © 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
  },
});

export default Footer;
