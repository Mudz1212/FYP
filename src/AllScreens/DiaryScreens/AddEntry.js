import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useAddDiaryEntry } from "../../Hooks/UsingDiary";

const AddEntry = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { saveDiaryEntry, loading } = useAddDiaryEntry();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Text style={styles.backButton}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Write</Text>
      </View>

      <Text style={styles.subtitle}>
        What else are you feeling? Let's talk.
      </Text>

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
        style={[
          styles.saveButton,
          (!title.trim() || !description.trim()) && styles.disabledButton,
        ]}
        onPress={() => saveDiaryEntry(title, description)}
        disabled={loading || !title.trim() || !description.trim()}
      >
        {loading ? (
          <ActivityIndicator color="#d4a373" />
        ) : (
          <Text style={styles.saveButtonText}>Save Entry</Text>
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
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d4a373",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4a373",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#000",
    textAlign: "center",
    marginVertical: 20,
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

export default AddEntry;
