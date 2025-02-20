/*
import { useState, useEffect } from "react";
import { fetchDuaByCategory } from "../Services/FirestoreService";
import useStore from "../Store/useStore.js";

const useDuaData = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, saveFavorites] = useStore("favoriteDuas", []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`🔍 Fetching data for category: ${category}`);
        const fetchedData = await fetchDuaByCategory(category);
        console.log("✅ Fetched Data from Firestore:", fetchedData);

        if (Array.isArray(fetchedData) && fetchedData.length > 0) {
          const augmentedData = fetchedData.map((dua) => ({
            ...dua,
            DuaFavourite: favorites.some((fav) => fav.id === dua.id),
          }));
          setData(augmentedData);
        } else {
          console.log("🚨 No data found.");
          setData([]);
        }
      } catch (error) {
        console.error("❌ Error fetching Dua:", error);
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
*/
