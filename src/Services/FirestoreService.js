import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const COLLECTION_NAME = "userEntries";

export const addDiaryEntry = async (title, content) => {
  try {
    console.log("✅ Attempting Firestore write");

    // ✅ Firestore should be initialized already, no need for `enableFirestore()`
    const docRef = await addDoc(collection(db, "userEntries"), {
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
    });

    console.log("✅ Diary Entry successfully added:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("❌ Firestore Write Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const getDiaryEntries = async () => {
  try {
    console.log("Fetching all diary entries...");

    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));

    if (querySnapshot.empty) {
      console.log("No diary entries found.");
      return [];
    }

    const entries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Fetched Diary Entries:", entries);
    return entries;
  } catch (error) {
    console.error("Fetching Error:", error.message);
    return [];
  }
};

export const updateDiaryEntry = async (id, updatedFields) => {
  try {
    console.log(`🔹 Updating diary entry: ${id}`);

    if (!id || !updatedFields || Object.keys(updatedFields).length === 0) {
      throw new Error("Invalid update parameters.");
    }

    const entryRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(entryRef, updatedFields);

    console.log("Diary Entry updated.");
    return { success: true };
  } catch (error) {
    console.error("Update Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const deleteDiaryEntry = async (id) => {
  try {
    console.log(`🗑️ Deleting diary entry: ${id}`);

    if (!id) throw new Error("Invalid entry ID.");

    const entryRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(entryRef);

    console.log("✅ Diary Entry deleted.");
    return { success: true };
  } catch (error) {
    console.error("❌ Deletion Error:", error.message);
    return { success: false, message: error.message };
  }
};
