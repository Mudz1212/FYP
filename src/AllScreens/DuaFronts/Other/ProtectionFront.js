import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const ProtectionFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("ProtectionBack", { item });
  };

  return (
    <DuaFront
      title="For Protection from all things harmful"
      category="Protection"
      onItemPress={handleItemPress}
    />
  );
};

export default ProtectionFront;
