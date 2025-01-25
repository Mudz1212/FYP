import React from "react";
import DuaFront from "../../../Layout/DuaFront";
const nightmaredata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const NightmaresFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // will make navigation for this soon
  };

  return (
    <DuaFront
      title="hadith on nightmares"
      data={nightmaredata}
      onItemPress={handleItemPress}
    />
  );
};

export default NightmaresFront;
