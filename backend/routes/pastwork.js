const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();
router.get("/pastworks/:id", async (req, res) => {
    const pastworksRef = db.collection("pastworks").where("author", "==", req.params.id);
    const snapshot = await pastworksRef.get();
    if (snapshot.empty) {
        res.status(404).send("No pastworks found");
    } else {
        const pastworks = [];
        snapshot.forEach(doc => {
            pastworks.push(doc.data());
        });
        res.send(pastworks);
    }
});
router.post("/create", async (req, res) => {
    const pastwork = req.body;
    const pastworkRef = await db.collection("pastworks").add(pastwork);
    if (pastworkRef.id) {
        res.send({success: true, id: pastworkRef.id});
    }else{
        res.status(401).send({success: false});
    }
});
module.exports = router;