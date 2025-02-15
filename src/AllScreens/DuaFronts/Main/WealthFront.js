import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const WealthFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("WealthBack", { item });
  };

  return (
    <DuaFront
      title="If you want to increase your Wealth"
      category="Wealth"
      onItemPress={handleItemPress}
    />
  );
};

export default WealthFront;
