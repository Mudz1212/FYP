import duas from "../../assets/duas.json";

export const fetchDuaByCategory = async (category) => {
  try {
    console.log(`Fetching Duas for Category: ${category}`);

    const categoryString = String(category);
    const filteredDuas = duas.filter((dua) => dua.Category === categoryString);

    if (filteredDuas.length === 0) {
      console.log("No duas found for this category!");
      return [];
    }

    return filteredDuas;
  } catch (error) {
    console.error("Error Fetching Duas:", error.message);
    return [];
  }
};
