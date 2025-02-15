import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const TravelFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("TravelBack", { item });
  };

  return (
    <DuaFront
      title="Always when traveling"
      category="Travel"
      onItemPress={handleItemPress}
    />
  );
};

export default TravelFront;
