import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabsConfig from "./src/AllScreens/TabsConfig";
import DiaryIntroPage from "./src/AllScreens/DiaryScreens/DiaryIntroPage";
import CalendarPage from "./src/AllScreens/DiaryScreens/CalendarPage";
import SettingScreen from "./src/AllScreens/SettingScreen";
import SignUpPage from "./src/AllScreens/DiaryScreens/SignUpPage";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// 📌 Stack Navigator for Diary & Calendar Screens
const DiaryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiaryIntro" component={DiaryIntroPage} />
      <Stack.Screen name="Calendar" component={CalendarPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
};

// 📌 Main App with Drawer Navigation
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#ffe4b5",
            width: 240,
          },
          drawerActiveTintColor: "#d4a373",
          drawerInactiveTintColor: "#333",
        }}
      >
        <Drawer.Screen name="Home Tabs" component={TabsConfig} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
        {/* Stack Screens Inside the Drawer */}
        <Drawer.Screen name="Diary" component={DiaryStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
