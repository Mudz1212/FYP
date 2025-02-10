import React from "react";
import Home from "../../Layout/Home";

const MainHome = () => {
  const mainData = [
    {
      label: "Daily",
      screen: "DailyFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
    {
      label: "Comfort",
      screen: "ComfortFront",
      image: "https://via.placeholder.com/150",
      small: true,
    },
    {
      label: "Sadness",
      screen: "SadnessFront",
      image: "https://via.placeholder.com/150",
      small: true,
    },
    {
      label: "Finance",
      screen: "FinanceFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
    {
      label: "Wealth",
      screen: "WealthFront",
      image: "https://via.placeholder.com/150",
      small: false,
    },
  ];

  return <Home title="Main Home" activeTab="Main" data={mainData} />;
};

export default MainHome;
