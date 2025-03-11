import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MainHomeStack } from "./MainHomeStack";
import OtherHomeStack from "./OtherHomeStack";
import Favourites from "../../UI/Favourites";

const Tab = createBottomTabNavigator();

const TabsConfig = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = "home";
          } else if (route.name === "Other") {
            iconName = "book";
          } else if (route.name === "Favourite") {
            iconName = "heart";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#333",
        tabBarInactiveTintColor: "#d4a373",
        tabBarStyle: { backgroundColor: "#ffe4b5" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Main" component={MainHomeStack} />
      <Tab.Screen name="Other" component={OtherHomeStack} />
      <Tab.Screen name="Favourite" component={Favourites} />
    </Tab.Navigator>
  );
};

export default TabsConfig;
