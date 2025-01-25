import React from "react";
import DuaFront from "../../../Layout/DuaFront";

const dailyData = [
  { title: "Ayatul Kursi", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

const DailyFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // Navigate or take action here
  };

  return (
    <DuaFront
      title="On a Daily"
      data={dailyData}
      onItemPress={handleItemPress}
    />
  );
};

export default DailyFront;
