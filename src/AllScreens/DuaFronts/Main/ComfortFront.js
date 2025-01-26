import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const Comfortdata = [
  { id: 1, title: "Al Baqarah", description: "The greatest protection" },
  { id: 2, title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { id: 3, title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const ComfortFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("ComfortBack", { item });
  };

  return (
    <DuaFront
      title="Seeking Comfort in Allah"
      data={Comfortdata}
      onItemPress={handleItemPress}
    />
  );
};

export default ComfortFront;
