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
          <TouchableOpacity>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <View
          style={
            activeTab === "Main"
              ? styles.tabButtonActive
              : styles.tabButtonInactive
          }
        >
          <Text
            style={
              activeTab === "Main"
                ? styles.tabTextActive
                : styles.tabTextInactive
            }
          >
            Main
          </Text>
        </View>

        <View
          style={
            activeTab === "Other"
              ? styles.tabButtonActive
              : styles.tabButtonInactive
          }
        >
          <Text
            style={
              activeTab === "Other"
                ? styles.tabTextActive
                : styles.tabTextInactive
            }
          >
            Other
          </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbea",
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
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#fffbea",
  },
  tabButtonActive: {
    backgroundColor: "#d4a373",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabButtonInactive: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabTextActive: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  tabTextInactive: {
    fontSize: 16,
    color: "#999",
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
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  cardSmall: {
    width: "48%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
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
});

export default Home;
