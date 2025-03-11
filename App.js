import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabsConfig from "./src/AllScreens/Stack/TabsConfig";
import DiaryIntroPage from "./src/AllScreens/DiaryScreens/DiaryIntroPage";
import CalendarPage from "./src/AllScreens/DiaryScreens/CalendarPage";
import SignUpPage from "./src/AllScreens/DiaryScreens/SignUpPage";
import AddEntry from "./src/AllScreens/DiaryScreens/AddEntry";
import EditEntry from "./src/AllScreens/DiaryScreens/EditEntry";
import EntriesList from "./src/AllScreens/DiaryScreens/EntriesList";
import DuaBack from "./src/Layout/Duaback";
import Home from "./src/Layout/Home";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DiaryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiaryIntro" component={DiaryIntroPage} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen name="EntriesList" component={EntriesList} />
      <Stack.Screen name="EditEntry" component={EditEntry} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="AddEntry" component={AddEntry} />
      <Stack.Screen name="DuaBack" component={DuaBack} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

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
        <Drawer.Screen name="Home" component={TabsConfig} />
        <Drawer.Screen name="Diary" component={DiaryStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
