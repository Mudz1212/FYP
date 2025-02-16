import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { fetchDuaByCategory } from "../data/firebaseUtils";

const DuaFront = ({ title, category, onItemPress }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(` Fetching Dua Data for Category: ${category}...`);
        const fetchedData = await fetchDuaByCategory(category);
        console.log(" Fetched Dua:", fetchedData);
        if (fetchedData) {
          setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]);
        }
      } catch (error) {
        console.error(" Error fetching Dua:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>No data found for this Dua.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => onItemPress && onItemPress(item)}
          >
            <View style={styles.listIndex}>
              <Text style={styles.indexText}>{index + 1}</Text>
            </View>
            <View style={styles.listContent}>
              <Text style={styles.listTitle}>{item.Title}</Text>
              {item.Description && (
                <Text style={styles.listDescription}>{item.Description}</Text>
              )}
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffbea" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffe4b5",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    fontStyle: "italic",
    textAlign: "center",
    width: "100%",
  },

  listContainer: { padding: 15 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  noDataContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  noDataText: { fontSize: 16, color: "red" },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
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
  indexText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  listContent: { flex: 1 },
  listTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  listDescription: { fontSize: 14, color: "#666" },
});

export default DuaFront;
