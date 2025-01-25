import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const sadnessData = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const SadnessFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // Navigate or take action here
  };

  return (
    <DuaFront
      title="Seeking Comfort in Allah"
      data={sadnessData}
      onItemPress={handleItemPress}
    />
  );
};

export default SadnessFront;
