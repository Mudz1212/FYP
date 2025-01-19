import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Screen = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <View style={styles.content}>
        <Text>This is the main content area.</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Screen;
