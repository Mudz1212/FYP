import React from "react";
import Home from "../../Layout/Home";

const OtherHome = () => {
  const otherData = [
    {
      label: "Clothes",
      screen: "ClotheFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
    {
      label: "Travel",
      screen: "TravelFront",
      image: "https://via.placeholder.com/150",
      small: true,
    },
    {
      label: "Nightmares",
      screen: "NightmaresFront",
      image: "https://via.placeholder.com/150",
      small: true,
    },
    {
      label: "Protection",
      screen: "ProtectionFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
    {
      label: "Waking up",
      screen: "WakingupFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
  ];

  return <Home title="Other Home" activeTab="Other" data={otherData} />;
};

export default OtherHome;
