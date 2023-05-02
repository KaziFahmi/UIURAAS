const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const db = admin.firestore();
router.use(bodyParser.json());

router.get("/news", async (req, res) => {
    const newsRef = db.collection("news");
    const snapshot = await newsRef.get();
    if (snapshot.empty) {
        res.status(404).send("No News found");
    } else {
        const news = [];
        snapshot.forEach(doc => {
            news.push(doc.data());
        });
        res.send(news);
    }
});
router.post("/create", async (req, res) => {
    const news = req.body;
    const newsRef = await db.collection("news").add(news);
    res.send({success: true});
});
module.exports = router;