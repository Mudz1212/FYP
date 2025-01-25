import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MainHomeStack } from "./MainHomeStack";
import OtherHomeStack from "./OtherHomeStack";

const Tab = createBottomTabNavigator();

const TabsConfig = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "MainHomeStack") {
            iconName = "home";
          } else if (route.name === "OtherHomeStack") {
            iconName = "settings";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#333",
        tabBarInactiveTintColor: "#d4a373",
        tabBarStyle: { backgroundColor: "#ffe4b5" },
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainHomeStack" component={MainHomeStack} />
      <Tab.Screen name="OtherHomeStack" component={OtherHomeStack} />
    </Tab.Navigator>
  );
};

export default TabsConfig;
