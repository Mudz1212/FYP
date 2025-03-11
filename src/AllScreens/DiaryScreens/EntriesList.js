import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  getDiaryEntries,
  deleteDiaryEntry,
} from "../../Services/FirestoreService";

const EntriesList = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const data = await getDiaryEntries();
      setEntries(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch entries.");
    }
    setLoading(false);
  };

  const handleDeleteEntry = async (id) => {
    Alert.alert("Delete Entry", "Are you sure you want to delete this entry?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: async () => {
          const response = await deleteDiaryEntry(id);
          if (response.success) {
            fetchEntries();
          } else {
            Alert.alert("Error", "Failed to delete entry.");
          }
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#d4a373" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Diary Entries</Text>
      {entries.length === 0 ? (
        <Text style={styles.noEntriesText}>No entries found.</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.entryContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditEntry", { entry: item })
                }
              >
                <Text style={styles.entryTitle}>{item.title}</Text>
                <Text style={styles.entryDate}>
                  {new Date(item.date).toLocaleDateString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteEntry(item.id)}>
                <Text style={styles.deleteButton}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d4a373",
    marginBottom: 15,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noEntriesText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
  entryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#ffe4b5",
    borderRadius: 10,
    marginBottom: 10,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  entryDate: {
    fontSize: 14,
    color: "#666",
  },
  deleteButton: {
    fontSize: 18,
    color: "#d9534f",
  },
});

export default EntriesList;
