import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDiaryEntries } from "../../Hooks/UsingDiary";

const EntriesList = ({ navigation }) => {
  const { entries, loading, handleDeleteEntry } = useDiaryEntries();

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

      {entries?.length === 0 || !entries ? (
        <Text style={styles.noEntriesText}>No entries found.</Text>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.entryContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditEntry", { entry: item })
                }
              >
                <Text style={styles.entryTitle}>{item.Title}</Text>
                <Text style={styles.entryDate}>
                  {new Date(item.created_at).toLocaleDateString()}{" "}
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
