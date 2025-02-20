/*

import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const addDiaryEntry = async (title, content) => {
  try {
    console.log("🔹 Attempting Firestore write...");

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
    console.log("🔹 Fetching all diary entries...");
    const querySnapshot = await getDocs(collection(db, "userEntries"));

    const entries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("✅ Fetched Diary Entries:", entries);
    return entries;
  } catch (error) {
    console.error("❌ Fetching Error:", error.message);
    return [];
  }
};

export const updateDiaryEntry = async (id, updatedFields) => {
  try {
    console.log(`🔹 Updating diary entry: ${id}`);
    const entryRef = doc(db, "userEntries", id);
    await updateDoc(entryRef, updatedFields);
    console.log("✅ Diary Entry updated.");
    return { success: true };
  } catch (error) {
    console.error("❌ Update Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const deleteDiaryEntry = async (id) => {
  try {
    console.log(`🔹 Deleting diary entry: ${id}`);
    const entryRef = doc(db, "userEntries", id);
    await deleteDoc(entryRef);
    console.log("✅ Diary Entry deleted.");
    return { success: true };
  } catch (error) {
    console.error("❌ Deletion Error:", error.message);
    return { success: false, message: error.message };
  }
};

export const fetchDuaByCategory = async (category) => {
  try {
    console.log(`🔍 Fetching Duas where Category == "${category}"...`);

    const duasCollectionRef = collection(db, "Duas");
    const q = query(duasCollectionRef, where("Category", "==", category));

    const querySnapshot = await getDocs(q, { source: "server" });

    if (querySnapshot.empty) {
      console.log(`🚨 No documents found for Category: "${category}"`);
      return [];
    }

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("✅ Firestore Data Retrieved:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching Duas:", error);
    return [];
  }
};
*/
