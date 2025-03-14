import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  getDiaryEntries,
  deleteDiaryEntry,
  updateDiaryEntry,
  addDiaryEntry,
} from "../Services/SupabaseServices";
import { loginUser, registerUser } from "../Services/Authentication";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [recentEntries, setRecentEntries] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleMonthChange = (direction) => {
    setCurrentMonth((prev) =>
      direction === "prev"
        ? prev === 0
          ? 11
          : prev - 1
        : prev === 11
        ? 0
        : prev + 1
    );
    setCurrentYear((prev) =>
      (direction === "prev" && currentMonth === 0) ||
      (direction === "next" && currentMonth === 11)
        ? prev + (direction === "prev" ? -1 : 1)
        : prev
    );
  };

  return {
    currentMonth,
    currentYear,
    recentEntries,
    months,
    daysInMonth,
    handleMonthChange,
  };
};

export const useDiaryEntries = () => {
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

  return { entries, loading, fetchEntries, handleDeleteEntry };
};

export const useEditEntry = (entry) => {
  const [title, setTitle] = useState(entry?.title || "");
  const [description, setDescription] = useState(entry?.description || "");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleUpdateEntry = async () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert("Missing Information", "Please fill out both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await updateDiaryEntry(entry.id, {
        title: title.trim(),
        description: description.trim(),
        created_at: new Date().toISOString(),
      });

      if (response.success) {
        Alert.alert("Success", "Entry updated successfully!", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      } else {
        Alert.alert("Error", "Failed to update entry.");
      }
    } catch (error) {
      Alert.alert("Unexpected Error", "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    loading,
    handleUpdateEntry,
  };
};

export const useAddDiaryEntry = (navigation, setTitle, setStory) => {
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
    } finally {
      setLoading(false);
    }
  };

  return { saveDiaryEntry, loading };
};

export const useAuthentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Email and password fields cannot be empty.");
      return;
    }

    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
      navigation.navigate("CalendarPage");
    } else {
      Alert.alert("Incorrect Login", result.message);
    }
  };

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Make sure everything is filled in correctly.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d).{7,}$/;

    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Invalid email format.");
      return;
    }

    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 7 characters with a number."
      );
      return;
    }

    setLoading(true);
    const result = await registerUser(email, password);
    setLoading(false);

    if (result.success) {
      Alert.alert("Success!", "Account created successfully.");
      navigation.navigate("DiaryIntro");
    } else {
      Alert.alert("Error", result.message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    loading,
  };
};
