import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainHome from "./DuaAndHome/MainHome";
import DailyFront from "./DuaFronts/Main/DailyFront";
import FinanceFront from "./DuaFronts/Main/FinanceFront";
import WealthFront from "./DuaFronts/Main/WealthFront";
import ComfortFront from "./DuaFronts/Main/ComfortFront";
import SadnessFront from "./DuaFronts/Main/Sadness";
import ComfortBack from "./DuaBack/ComfortBack";

const Stack = createNativeStackNavigator();

export const MainHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainHome"
        component={MainHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DailyFront"
        component={DailyFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinanceFront"
        component={FinanceFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WealthFront"
        component={WealthFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComfortFront"
        component={ComfortFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SadnessFront"
        component={SadnessFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComfortBack"
        component={ComfortBack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
