import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Icons from "../../UI/Icons.js";
import Button from "../../components/UI/Button.js";
import Screen from "../../layout/Screen.js";

export const MainHome = ({ navigation }) => {
  // Sample state for managing sections
  const [isLoading, setIsLoading] = useState(false);
  const [modules, setModules] = useState([
    { name: "Daily", image: "image1.jpg" },
    { name: "Finance", image: "image2.jpg" },
    { name: "Comfort", image: "image3.jpg" },
    { name: "Wealth", image: "image4.jpg" },
  ]);

  const [loggedinUser, setLoggedinUser] = useState({
    UserFirstname: "John",
  });

  const handleSearch = () => {
    console.log("Search clicked!");
  };

  const handleSettings = () => {
    console.log("Settings clicked!");
  };

  const handleMenu = () => {
    console.log("Menu clicked!");
  };

  const navigateToModuleScreen = (moduleName) => {
    console.log(`Navigating to ${moduleName} screen`);
    navigation.navigate("ModuleScreen", { moduleName });
  };

  const renderModuleItem = (module) => (
    <TouchableOpacity
      key={module.name}
      style={styles.moduleItem}
      onPress={() => navigateToModuleScreen(module.name)}
    >
      <Text style={styles.moduleTitle}>{module.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Screen>
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton} onPress={handleSearch}>
            <Icons.Search />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleSettings}
          >
            <Icons.Settings />
          </TouchableOpacity>
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.tabButton} onPress={handleMenu}>
            <Text style={styles.tabText}>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton} onPress={handleMenu}>
            <Text style={styles.tabText}>Other</Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.spinner} />
        ) : (
          <View style={styles.modulesContainer}>
            {modules.map((module) => renderModuleItem(module))}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 18,
    color: "#555",
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  modulesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moduleItem: {
    width: "48%",
    height: 150,
    marginBottom: 15,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  spinner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

export default MainHome;
