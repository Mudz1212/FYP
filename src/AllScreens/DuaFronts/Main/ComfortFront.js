import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const Comfortdata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const ComfortFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // Will have this navigate to something soon
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
