import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const WakingupFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("WakingupBack", { item });
  };

  return (
    <DuaFront
      title="Upon Waking Up"
      category="Wakingup"
      onItemPress={handleItemPress}
    />
  );
};

export default WakingupFront;
