import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
const ComfortData = [
  { id: 1, title: "Ayatul Kursi", description: "The greatest protection" },
  { id: 2, title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { id: 3, title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const DailyFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("DailyBack", { item });
  };

  return (
    <DuaFront
      title="On a Daily"
      data={ComfortData}
      onItemPress={handleItemPress}
    />
  );
};

export default DailyFront;
