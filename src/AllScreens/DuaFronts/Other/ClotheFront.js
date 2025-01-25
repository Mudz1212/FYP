import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const clothesdata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const ClotheFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item);
  };

  return (
    <DuaFront
      title="Clothes and what to say"
      data={clothesdata}
      onItemPress={handleItemPress}
    />
  );
};

export default ClotheFront;
