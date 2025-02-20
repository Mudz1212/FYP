import React from "react";
import Home from "../../Layout/Home";

const MainHome = () => {
  const mainData = [
    {
      label: "Daily",
      screen: "DailyFront",
      image: "https://source.unsplash.com/600x400/?sunrise,meditation",
      small: false,
    },
    {
      label: "Comfort",
      screen: "ComfortFront",
      image: "https://source.unsplash.com/600x400/?cozy,peaceful",
      small: true,
    },
    {
      label: "Sadness",
      screen: "SadnessFront",
      image: "https://source.unsplash.com/600x400/?rain,sad",
      small: true,
    },
    {
      label: "Finance",
      screen: "FinanceFront",
      image: "https://source.unsplash.com/600x400/?money,finance",
      small: false,
    },
    {
      label: "Wealth",
      screen: "WealthFront",
      image: "https://source.unsplash.com/600x400/?gold,wealth",
      small: false,
    },
  ];

  return <Home title="Main Home" activeTab="Main" data={mainData} />;
};

export default MainHome;
