import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    "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",
});

const AskAiEcho = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleAskAI = async () => {
    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: question }],
      });

      const aiResponse = completion.choices[0].message.content;

      navigation.navigate("AskAiView", {
        userQuestion: question,
        aiResponse,
      });
    } catch (error) {
      console.error("OpenAI Error:", error);
      navigation.navigate("AskAiView", {
        userQuestion: question,
        aiResponse: "⚠️ Error fetching response. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ask AI Echo (Religious Questions)</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type your question..."
        placeholderTextColor="#999"
        value={question}
        onChangeText={setQuestion}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAskAI}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Thinking..." : "Ask AI"}
        </Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#d4a373" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fffbea",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 10,
    backgroundColor: "#d4a373",
    padding: 12,
    borderRadius: 10,
    elevation: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d4a373",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#ffe4b5",
    color: "#333",
  },
  button: {
    backgroundColor: "#d4a373",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default AskAiEcho;
