import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Here are your favourite duas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Favourites;
