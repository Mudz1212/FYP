import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const ComfortFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("ComfortBack", { item });
  };

  return (
    <DuaFront
      title="Seeking Comfort"
      category="Comfort"
      onItemPress={handleItemPress}
    />
  );
};

export default ComfortFront;
