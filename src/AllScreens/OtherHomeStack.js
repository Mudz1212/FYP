import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtherHome from "./DuaAndHome/OtherHome";
import WakingupFront from "./DuaFronts/Other/WakingupFront";
import ProtectionFront from "./DuaFronts/Other/ProtectionFront";
import ClotheFront from "./DuaFronts/Other/ClotheFront";
import NightmaresFront from "./DuaFronts/Other/NightmaresFront";
import TravelFront from "./DuaFronts/Other/TravelFront";

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
    </Stack.Navigator>
  );
};

export default OtherHomeStack;
