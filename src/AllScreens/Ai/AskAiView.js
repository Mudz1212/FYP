import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const AskAiView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userQuestion, aiResponse } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.header}>
        Ask <Text style={styles.highlight}>AiEcho</Text>{" "}
      </Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.subHeader}>You asked:</Text>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{userQuestion}</Text>
        </View>

        <Text style={styles.subHeader}>AiEcho says...</Text>
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>{aiResponse}</Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>
            The answers generated are for informational purposes only and should
            not be considered as Islamic rulings (fatwa). Please consult with
            qualified Islamic scholars for further guidance.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fffbea", padding: 20 },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  backButton: { position: "absolute", top: 50, left: 20, zIndex: 10 },
  backText: { fontSize: 24, color: "#333" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 50,
  },
  highlight: { color: "#d4a373" },
  beta: { fontSize: 12, color: "#999", fontWeight: "bold" },
  subHeader: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 20 },
  questionBox: {
    backgroundColor: "#ffe4b5",
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  questionText: { fontSize: 16, color: "#333" },
  answerBox: {
    backgroundColor: "#d4a373",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  answerText: { fontSize: 16, color: "#fff", lineHeight: 22 },
  warningBox: {
    backgroundColor: "#d4a373",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  warningText: { fontSize: 14, color: "#fff", textAlign: "center" },
});

export default AskAiView;
