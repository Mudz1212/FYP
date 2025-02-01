import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
const Wealthdata = [
  { title: "Al Baqarah", description: "The greatest protection" },
  { title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const WealthFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    console.log("Item pressed:", item);
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
