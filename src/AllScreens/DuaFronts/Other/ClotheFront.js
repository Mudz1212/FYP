import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
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
