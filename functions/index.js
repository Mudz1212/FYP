const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/duas/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const snapshot = await db
      .collection("duas")
      .where("category", "==", category)
      .get();

    if (snapshot.empty) {
      return res
        .status(404)
        .json({ message: "No Duas found for this category" });
    }

    const duas = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(duas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
});

app.post("/duas", async (req, res) => {
  try {
    const newDua = req.body;
    const docRef = await db.collection("duas").add(newDua);
    res.status(201).json({ id: docRef.id, ...newDua });
  } catch (error) {
    res.status(500).json({ message: "Error adding Dua", error: error.message });
  }
});

app.put("/duas/:id", async (req, res) => {
  try {
    const duaId = req.params.id;
    const updateData = req.body;
    const docRef = db.collection("duas").doc(duaId);
    await docRef.update(updateData);
    res.json({ id: duaId, ...updateData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Dua", error: error.message });
  }
});

app.delete("/duas/:id", async (req, res) => {
  try {
    const duaId = req.params.id;
    await db.collection("duas").doc(duaId).delete();
    res.json({ message: "Dua deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Dua", error: error.message });
  }
});

exports.api = functions.https.onRequest(app);
