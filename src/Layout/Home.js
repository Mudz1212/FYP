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

const Home = ({ title, activeTab }) => {
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
        <TouchableOpacity
          style={
            activeTab === "Main"
              ? styles.tabButtonActive
              : styles.tabButtonInactive
          }
          onPress={() => navigation.navigate("MainHome")}
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
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeTab === "Other"
              ? styles.tabButtonActive
              : styles.tabButtonInactive
          }
          onPress={() => navigation.navigate("OtherHome")}
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
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("DailyFront")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Daily</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.cardSmall}
            onPress={() => navigation.navigate("ComfortFront")}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Comfort</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardSmall}
            onPress={() => navigation.navigate("SadnessFront")}
          >
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Sadness</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("FinanceFront")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("WealthFront")}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Wealth</Text>
        </TouchableOpacity>
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
    paddingVertical: 20,
    backgroundColor: "#ffe4b5",
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
    paddingVertical: 20,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
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
