import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import API from "../../../API";
import DuaFront from "../../../Layout/DuaFront";

const ComfortFront = ({ navigation }) => {
  const [duas, setDuas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDuas = async () => {
      const response = await API.get("/duas");

      if (response.isSuccess) {
        setDuas(response.result.data);
      } else {
        setError(response.message || "Failed to fetch duas.");
      }
      setLoading(false);
    };

    fetchDuas();
  }, []);

  const handleItemPress = (item) => {
    navigation.navigate("ComfortBack", { item });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Seeking Comfort in Allah</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#d4a373" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <DuaFront
          title="Seeking Comfort in Allah"
          data={duas}
          onItemPress={handleItemPress}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d4a373",
    textAlign: "center",
    marginVertical: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default ComfortFront;
