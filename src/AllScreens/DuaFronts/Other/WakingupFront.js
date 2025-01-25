import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
const wakingupdata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const WakingupFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item); // Navigate or take action here
  };

  return (
    <DuaFront
      title="Waking up duas"
      data={wakingupdata}
      onItemPress={handleItemPress}
    />
  );
};

export default WakingupFront;
