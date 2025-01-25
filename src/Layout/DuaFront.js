import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const DuaFront = ({ title, data: propData, onItemPress, apiUrl }) => {
  const [data, setData] = useState(propData || []); // Using prop data or like an empty array for easier transition to backend coding
  const [loading, setLoading] = useState(!propData);

  useEffect(() => {
    if (!propData && apiUrl) {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [apiUrl, propData]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => onItemPress && onItemPress(item)}
    >
      <View style={styles.listIndex}>
        <Text style={styles.indexText}>{index + 1}</Text>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ffe4b5",
    paddingVertical: 50,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    fontStyle: "italic",
  },
  listContainer: {
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  listIndex: {
    backgroundColor: "#d3d3d3",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  indexText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  listDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default DuaFront;
