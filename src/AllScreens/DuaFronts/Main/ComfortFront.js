import React from "react";
import DuaFront from "../../../Layout/DuaFront";
//temp data for now at least so something is displayed there however
// will be using a fetch request to get the data from the server
const Comfortdata = [
  { id: 1, title: "Al Baqarah", description: "The greatest protection" },
  { id: 2, title: "Surah Al-Fatihah", description: "The Opening of the Quran" },
  { id: 3, title: "Surah Al-Ikhlas", description: "The essence of monotheism" },
];

export const ComfortFront = ({ navigation }) => {
  const handleItemPress = (item) => {
    navigation.navigate("ComfortBack", { item });
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
