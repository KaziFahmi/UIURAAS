const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const db = admin.firestore();
router.use(bodyParser.json());

router.get("/notices", async (req, res) => {
    const noticesRef = db.collection("notices");
    const snapshot = await noticesRef.get();
    if (snapshot.empty) {
        res.status(404).send("No Notices found");
    } else {
        const notices = [];
        snapshot.forEach(doc => {
            notices.push(doc.data());
        });
        res.send(notices);
    }
});

router.post("/create", async (req, res) => {
    const notice = req.body;
    const noticeRef = await db.collection("notices").add(notice);
    res.send({success: true});
});

module.exports = router;