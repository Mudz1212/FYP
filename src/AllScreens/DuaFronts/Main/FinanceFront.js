import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const FinanceFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("FinanceBack", { item });
  };

  return (
    <DuaFront
      title="Going through Financial Hardship"
      category="Finance"
      onItemPress={handleItemPress}
    />
  );
};

export default FinanceFront;
