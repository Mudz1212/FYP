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

const MainHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Main Home</Text>
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
        <View style={styles.tabButtonActive}>
          <Text style={styles.tabTextActive}>Main</Text>
        </View>
        <View style={styles.tabButtonInactive}>
          <Text style={styles.tabTextInactive}>Other</Text>
        </View>
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

        <View style={styles.row}>
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
        </View>
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#ffe4b5",
  },
  menuIcon: {
    fontSize: 20,
    color: "#333",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
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
    backgroundColor: "#fff",
  },
  tabButtonActive: {
    backgroundColor: "#d3d3d3",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabButtonInactive: {
    backgroundColor: "#f5f5f5",
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
    width: "47%",
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignSelf: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardImage: {
    width: "100%",
    height: 150,
    alignItems: "left",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default MainHome;
