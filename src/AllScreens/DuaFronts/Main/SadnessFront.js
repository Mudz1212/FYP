import React from "react";
import DuaFront from "../../../Layout/DuaFront";

export const SadnessFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("SadnessBack", { item });
  };

  return (
    <DuaFront
      title="If you are feeling Sad"
      category="Sadness"
      onItemPress={handleItemPress}
    />
  );
};

export default SadnessFront;
