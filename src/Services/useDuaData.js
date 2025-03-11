import { useState, useEffect } from "react";
import duas from "../assets/duas.json";
import useStore from "../Store/useStore.js";

const useDuaData = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, saveFavorites] = useStore("favoriteDuas", []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching data for category: ${category}`);

        const filteredDuas = duas.filter((dua) => dua.Category === category);

        if (Array.isArray(filteredDuas) && filteredDuas.length > 0) {
          const augmentedData = filteredDuas.map((dua) => ({
            ...dua,
            DuaFavourite: favorites.some((fav) => fav.id === dua.id),
          }));
          setData(augmentedData);
          console.log("Fetched Data from JSON:", augmentedData);
        } else {
          console.log("No data found.");
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching Dua:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, favorites]);

  const handleFavorite = (dua) => {
    const isFavourite = !dua.DuaFavourite;

    const updatedDuaList = data.map((item) =>
      item.id === dua.id ? { ...item, DuaFavourite: isFavourite } : item
    );
    setData(updatedDuaList);

    const updatedFavoritesList = updatedDuaList
      .filter((item) => item.DuaFavourite)
      .map(({ id, Title, Description }) => ({ id, Title, Description }));

    saveFavorites(updatedFavoritesList);
  };

  return { data, loading, handleFavorite };
};

export default useDuaData;
