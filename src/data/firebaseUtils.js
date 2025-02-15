import { db } from "../Services/Authentication";
import { collection, query, where, getDocs } from "firebase/firestore";

export const fetchDuaByCategory = async (category) => {
  try {
    const duasCollectionRef = collection(db, "ComfortDuas");
    const q = query(duasCollectionRef, where("Category", "==", category));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    return [];
  }
};
