import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Appearance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>Audio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>System</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}>More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subPage}>
        <View style={styles.settingsSubItem}>
          <Text style={styles.subText}>Theme</Text>
          <TextInput style={styles.subInput} placeholder="AUTO" />
        </View>

        <View style={styles.settingsSubItem}>
          <Text style={styles.subText}>Translation</Text>
          <Switch />
        </View>

        <View style={styles.settingsSubItem}>
          <Text style={styles.subText}>Transliteration</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ffe4b5",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    fontSize: 24,
    color: "#333",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  settingsList: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
  },
  settingsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  settingsText: {
    fontSize: 16,
    color: "#333",
  },
  subPage: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  settingsSubItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: "#333",
  },
  subInput: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    width: 100,
    textAlign: "center",
  },
});

export default SettingScreen;
