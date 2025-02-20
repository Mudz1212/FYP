import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = ({ title, activeTab, data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menuButton}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.cardGrid}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={item.small ? styles.cardSmall : styles.cardLarge}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AskAiEcho")}
      >
        <Text style={styles.floatingButtonText}>Ask AI Echo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffe4b5",
    paddingTop: 50,
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    fontSize: 32,
    color: "#d4a373",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  icon: {
    fontSize: 20,
    color: "#333",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  cardLarge: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  cardSmall: {
    width: "48%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingVertical: 10,
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#d4a373",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
