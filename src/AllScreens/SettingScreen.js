import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SettingScreen = () => {
  const navigation = useNavigation();

  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [audioOpen, setAudioOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={26} color="#d4a373" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.settingsList}>
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => setAppearanceOpen(!appearanceOpen)}
        >
          <Text style={styles.settingsText}>Appearance</Text>
          <Ionicons
            name={appearanceOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        {appearanceOpen && (
          <View style={styles.dropdownContent}>
            <View style={styles.settingsSubItem}>
              <Text style={styles.subText}>Theme</Text>
              <Text style={styles.optionText}>AUTO</Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => setAudioOpen(!audioOpen)}
        >
          <Text style={styles.settingsText}>Audio</Text>
          <Ionicons
            name={audioOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        {audioOpen && (
          <View style={styles.dropdownContent}>
            <View style={styles.settingsSubItem}>
              <Text style={styles.subText}>Translation</Text>
              <Switch />
            </View>
            <View style={styles.settingsSubItem}>
              <Text style={styles.subText}>Transliteration</Text>
              <Switch />
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => setSystemOpen(!systemOpen)}
        >
          <Text style={styles.settingsText}>System</Text>
          <Ionicons
            name={systemOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        {systemOpen && (
          <View style={styles.dropdownContent}>
            <View style={styles.settingsSubItem}>
              <Text style={styles.subText}>Notifications</Text>
              <Switch />
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => setMoreOpen(!moreOpen)}
        >
          <Text style={styles.settingsText}>More</Text>
          <Ionicons
            name={moreOpen ? "chevron-up" : "chevron-down"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        {moreOpen && (
          <View style={styles.dropdownContent}>
            <View style={styles.settingsSubItem}>
              <Text style={styles.subText}>Advanced Options</Text>
            </View>
          </View>
        )}
      </View>
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
    paddingVertical: 15,
    backgroundColor: "#ffe4b5",
    paddingTop: 50,
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    flex: 1,
  },
  settingsList: {
    backgroundColor: "#fffbea",
    paddingVertical: 10,
  },
  settingsItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d4a373",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingsText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownContent: {
    backgroundColor: "#fffbea",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d4a373",
  },
  settingsSubItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#333",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d4a373",
  },
});

export default SettingScreen;
