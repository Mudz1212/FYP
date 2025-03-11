import duas from "../../assets/duas.json";

export const searchDuas = async (keyword) => {
  try {
    if (!keyword.trim()) return [];

    console.log(`Searching Duas for keyword: "${keyword}"`);

    const keywordLower = keyword.toLowerCase();

    const filteredDuas = duas.filter(
      (dua) =>
        dua.Title.toLowerCase().includes(keywordLower) ||
        dua.Description.toLowerCase().includes(keywordLower) ||
        dua.Category.toLowerCase().includes(keywordLower)
    );

    if (filteredDuas.length === 0) {
      console.log("No duas found for this keyword!");
      return [];
    }

    return filteredDuas;
  } catch (error) {
    console.error("Error Searching Duas:", error);
    return [];
  }
};
