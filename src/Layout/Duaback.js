import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DuaBack = ({ item, navigation }) => {
  const [isArabicOpen, setIsArabicOpen] = useState(false);
  const [isTransliterationOpen, setIsTransliterationOpen] = useState(false);
  const [isTranslationOpen, setIsTranslationOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.TheBackButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerstitle}>{item.Title}</Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsArabicOpen(!isArabicOpen)}
        style={styles.toggleButton}
      >
        <Text style={styles.textfortogglebutton}>
          {isArabicOpen ? "Hide Arabic" : "Show Arabic"}
        </Text>
      </TouchableOpacity>
      {isArabicOpen && (
        <View style={styles.contentSection}>
          <Text style={styles.arabicText}>{item.Arabic}</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setIsTransliterationOpen(!isTransliterationOpen)}
        style={styles.toggleButton}
      >
        <Text style={styles.textfortogglebutton}>
          {isTransliterationOpen
            ? "Hide Transliteration"
            : "Show Transliteration"}
        </Text>
      </TouchableOpacity>
      {isTransliterationOpen && (
        <View style={styles.contentSection}>
          <Text style={styles.transliterationText}>{item.Transliteration}</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => setIsTranslationOpen(!isTranslationOpen)}
        style={styles.toggleButton}
      >
        <Text style={styles.textfortogglebutton}>
          {isTranslationOpen ? "Hide Translation" : "Show Translation"}
        </Text>
      </TouchableOpacity>
      {isTranslationOpen && (
        <View style={styles.contentSection}>
          <Text style={styles.translationText}>{item.Translation}</Text>
        </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 60,
  },
  TheBackButton: {
    fontSize: 24,
    color: "#000",
    marginRight: 10,
  },
  headerstitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4a373",
    textAlign: "center",
  },
  toggleButton: {
    backgroundColor: "#d4a373",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",

    marginVertical: 10,
  },
  textfortogglebutton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentSection: {
    backgroundColor: "#ffe4b5",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  arabicText: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
    fontFamily: "Arabic",
  },
  transliterationText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  translationText: {
    fontSize: 16,
    textAlign: "justify",
    color: "#333",
  },
});

export default DuaBack;
