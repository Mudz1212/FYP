import { useState } from "react";
import { Alert } from "react-native";
import { addDiaryEntry } from "../Services/SupabaseServices";

const useAddDiaryEntry = (navigation, setTitle, setStory) => {
  const [loading, setLoading] = useState(false);

  const saveDiaryEntry = async (title, story) => {
    if (!title.trim() || !story.trim()) {
      Alert.alert("Error", "Please fill out both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await addDiaryEntry(title, story);
      if (response.success) {
        Alert.alert("Success", "Entry saved successfully!", [
          { text: "OK", onPress: () => navigation?.navigate("CalendarPage") },
        ]);
        setTitle("");
        setStory("");
      } else {
        Alert.alert("Error", response.message || "Failed to save entry.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { saveDiaryEntry, loading };
};

export default useAddDiaryEntry;
