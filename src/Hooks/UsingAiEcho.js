import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OPENAI_API_KEY } from "@env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const useAskAiEcho = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const isReligiousQuestion = (question) => {
    const keywords = [
      "Islam",
      "Allah",
      "Quran",
      "Hadith",
      "Dua",
      "Prophet",
      "Sunnah",
      "Christianity",
      "Bible",
      "Jesus",
      "Church",
      "God",
      "Prayer",
      "Judaism",
      "Torah",
      "Synagogue",
      "Rabbi",
      "Hinduism",
      "Bhagavad Gita",
      "Krishna",
      "Temple",
      "Buddhism",
      "Dhamma",
      "Buddha",
      "Faith",
      "Afterlife",
      "Forgiveness",
      "Sin",
      "Heaven",
      "Hell",
    ];

    return keywords.some((keyword) =>
      question.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const askAiEcho = async (question) => {
    if (!question.trim()) {
      Alert.alert("Error", "Please enter a question.");
      return;
    }

    if (!isReligiousQuestion(question)) {
      Alert.alert(
        "Restricted",
        "Only religious-related questions are allowed."
      );
      return;
    }

    setLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an AI that only provides responses to religious questions. If a user asks a non-religious question, politely inform them that you can only answer religious queries.",
          },
          { role: "user", content: question },
        ],
      });

      const aiResponse = completion.choices[0].message.content;

      if (
        aiResponse.includes("I'm sorry") ||
        aiResponse.includes("We can only")
      ) {
        Alert.alert(
          "Restricted",
          "Please ask only about religious related questions.",
          "Feel free to ask me anything"
        );
        return;
      }

      navigation.navigate("AskAiView", {
        userQuestion: question,
        aiResponse,
      });
    } catch (error) {
      console.error("OpenAI Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { askAiEcho, loading };
};

export default useAskAiEcho;
