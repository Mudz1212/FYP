import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtherHome from "./Home/OtherHome";
import SettingScreen from "./SettingScreen";
import WakingupFront from "./DuaFronts/Other/WakingupFront";
import ProtectionFront from "./DuaFronts/Other/ProtectionFront";
import ClotheFront from "./DuaFronts/Other/ClotheFront";
import NightmaresFront from "./DuaFronts/Other/NightmaresFront";
import TravelFront from "./DuaFronts/Other/TravelFront";

import ClothesBack from "./DuaBack/Other/ClothesBack";
import NightmaresBack from "./DuaBack/Other/NightmaresBack";
import ProtectionBack from "./DuaBack/Other/ProtectionBack";
import TravelBack from "./DuaBack/Other/TravelBack";
import WakingupBack from "./DuaBack/Other/WakingupBack";

import AskAiEcho from "./Ai/AskAiEcho";
import AskAiView from "./Ai/AskAiView";

const Stack = createNativeStackNavigator();

const OtherHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OtherHome"
        component={OtherHome}
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
        name="ClotheFront"
        component={ClotheFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NightmaresFront"
        component={NightmaresFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProtectionFront"
        component={ProtectionFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WakingupFront"
        component={WakingupFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelFront"
        component={TravelFront}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClothesBack"
        component={ClothesBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NightmaresBack"
        component={NightmaresBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProtectionBack"
        component={ProtectionBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TravelBack"
        component={TravelBack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WakingupBack"
        component={WakingupBack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OtherHomeStack;
