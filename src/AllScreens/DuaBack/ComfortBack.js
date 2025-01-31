import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ComfortFront = () => {
  const comfortData = [
    {
      title: "Ayatul Kursi: The greatest protection",
      arabic: `اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
      transliteration: `Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum La ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-'ard Man dhal-ladhi yashfa'u 'indahu illa bi-idhnihi Ya'lamu ma baina aidhihim wa ma khalfahum, wa la yuhituna bi shai'im-min 'ilmihi illa bima sha'a Wasi'a kursiyuhus-samawati wal ard, wa la ya'uduhu hifdhuhuma Wa Huwal 'Aliyul-Adheem`,
      translation: `"Allah! There is no god but He - the Living, The Self-subsisting, Eternal. No slumber can seize Him Nor Sleep. His are all things In the heavens and on earth. Who is there can intercede In His presence except As he permitteth? He knoweth What (appeareth To His creatures As) Before or After or Behind them. Nor shall they encompass Aught of his knowledge Except as He willeth. His throne doth extend Over the heavens And on earth, and He feeleth No fatigue in guarding And preserving them, For He is the Most High, The Supreme (in glory). [Surah al-Baqarah 2:255]"`,
    },
  ];

  const [isArabicOpen, setIsArabicOpen] = useState(false);
  const [isTranslationOpen, setIsTranslationOpen] = useState(false);

  const toggleArabic = () => setIsArabicOpen((prev) => !prev);
  const toggleTranslation = () => setIsTranslationOpen((prev) => !prev);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ayat ul Kursi</Text>
      </View>

      {comfortData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>

          <TouchableOpacity onPress={toggleArabic} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {isArabicOpen ? "Hide Arabic" : "Show Arabic"}
            </Text>
          </TouchableOpacity>
          {isArabicOpen && (
            <View style={styles.contentSection}>
              <Text style={styles.arabicText}>{item.arabic}</Text>
              <Text style={styles.transliterationText}>
                {item.transliteration}
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={toggleTranslation}
            style={styles.toggleButton}
          >
            <Text style={styles.toggleButtonText}>
              {isTranslationOpen ? "Hide Translation" : "Show Translation"}
            </Text>
          </TouchableOpacity>
          {isTranslationOpen && (
            <View style={styles.contentSection}>
              <Text style={styles.translationText}>{item.translation}</Text>
            </View>
          )}
        </View>
      ))}
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
    paddingVertical: 30,
  },
  backButton: {
    fontSize: 24,
    color: "#000",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d4a373",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  toggleButton: {
    backgroundColor: "#d4a373",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  toggleButtonText: {
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

export default ComfortFront;
