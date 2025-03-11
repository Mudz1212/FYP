import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const DailyFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("DailyBack", { item });
  };

  return (
    <DuaFront
      title="On a Daily Basis"
      category="Daily"
      id="1"
      onItemPress={handleItemPress}
    />
  );
};

export default DailyFront;
