import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainHome from "./Home/MainHome";
import SettingScreen from "./SettingScreen";
import DailyFront from "./DuaFronts/Main/DailyFront";
import FinanceFront from "./DuaFronts/Main/FinanceFront";
import WealthFront from "./DuaFronts/Main/WealthFront";
import ComfortFront from "./DuaFronts/Main/ComfortFront";
import SadnessFront from "./DuaFronts/Main/SadnessFront";

import ComfortBack from "./DuaBack/Main/ComfortBack";
import DailyBack from "./DuaBack/Main/DailyBack";
import FinanceBack from "./DuaBack/Main/Financeback";
import SadnessBack from "./DuaBack/Main/SadnessBack";
import WealthBack from "./DuaBack/Main/WealthBack";
import AskAiEcho from "./Ai/AskAiEcho";
import AskAiView from "./Ai/AskAiView";

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
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AskAiEcho"
        component={AskAiEcho}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AskAiView"
        component={AskAiView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComfortFront"
        component={ComfortFront}
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
        name="SadnessFront"
        component={SadnessFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WealthFront"
        component={WealthFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ComfortBack"
        component={ComfortBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DailyBack"
        component={DailyBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinanceBack"
        component={FinanceBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SadnessBack"
        component={SadnessBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WealthBack"
        component={WealthBack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
