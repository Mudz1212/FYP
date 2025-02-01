import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
const dailyData = [
  { title: "Ayatul Kursi", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

const DailyFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item);
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
