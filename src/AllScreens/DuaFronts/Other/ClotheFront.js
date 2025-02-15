import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const ClotheFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("ClothesBack", { item });
  };

  return (
    <DuaFront
      title="For the clothes one wears"
      category="Clothes"
      onItemPress={handleItemPress}
    />
  );
};

export default ClotheFront;
