import { useState } from "react";
import { Alert } from "react-native";
import { addDiaryEntry } from "../Services/FirestoreService";
import { useNavigation } from "@react-navigation/native";

const useAddDiaryEntry = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const saveDiaryEntry = async (title, story) => {
    if (!title.trim() || !story.trim()) {
      Alert.alert("⚠️ Missing Information", "Please fill out both fields.");
      return;
    }

    if (loading) return;
    setLoading(true);

    console.log("Saving Entry...");

    try {
      const response = await addDiaryEntry(title, story);
      console.log("Response from addDiaryEntry:", response);

      if (response.success) {
        Alert.alert("Success", "Entry saved successfully!", [
          { text: "OK", onPress: () => navigation.navigate("CalendarPage") },
        ]);
      } else {
        Alert.alert("Error", response.message || "Failed to save entry.");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      Alert.alert("Unexpected Error", "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { saveDiaryEntry, loading };
};

export default useAddDiaryEntry;
