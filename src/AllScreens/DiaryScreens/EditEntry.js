import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEditEntry } from "../../Hooks/UsingDiary";

const EditEntry = ({ route, navigation }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    loading,
    handleUpdateEntry,
  } = useEditEntry(route.params.entry, navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Entry</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title..."
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.storyInput]}
        placeholder="Write your description..."
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity
        style={[styles.saveButton, loading && styles.disabledButton]}
        onPress={handleUpdateEntry}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#d4a373" />
        ) : (
          <Text style={styles.saveButtonText}>Update Entry</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d4a373",
    textAlign: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d4a373",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  storyInput: {
    height: 120,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#ffe4b5",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d4a373",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
});

export default EditEntry;
