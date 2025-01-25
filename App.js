import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsConfig from "./src/AllScreens/TabsConfig";
import DiaryIntroPage from "./src/AllScreens/DiaryScreens/DiaryIntroPage";
import SettingScreen from "./src/AllScreens/SettingScreen";
import CalendarPage from "./src/AllScreens/DiaryScreens/CalendarPage";

const Drawer = createDrawerNavigator();

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
        <Drawer.Screen name="Diary" component={DiaryIntroPage} />
        <Drawer.Screen name="Calendar" component={CalendarPage} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
