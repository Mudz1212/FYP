import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const NightmaresFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("NightmaresBack", { item });
  };

  return (
    <DuaFront
      title="Nightmares and Bad Dreams"
      category="Nightmares"
      onItemPress={handleItemPress}
    />
  );
};

export default NightmaresFront;
