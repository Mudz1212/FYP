import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const Wealthdata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const WealthFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // Navigate or take action here
  };

  return (
    <DuaFront
      title=" Is wealth everything?"
      data={Wealthdata}
      onItemPress={handleItemPress}
    />
  );
};

export default WealthFront;
