const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.get("/papers", async (req, res) => {
    const papersRef = db.collection("papers");
    const snapshot = await papersRef.get();
    if (snapshot.empty) {
        res.status(404).send("No papers found");
    } else {
        const papers = [];
        snapshot.forEach(doc => {
            papers.push(doc.data());
        });
        res.send(papers);
    }
});



router.get("/:paperId", async (req, res) => {
    const paperId = req.params.paperId;
    const paperRef = db.collection("papers").doc(paperId);
    const doc = await paperRef.get();
    if (!doc.exists) {
        res.status(404).send("Paper not found");
    } else {
        res.send(doc.data());
    }
});

router.post("/create", async (req, res) => {
    const paper = req.body;
    const paperRef = db.collection("papers").doc(paper.id);
    const doc = await paperRef.get();
    if (doc.exists) {
        res.status(409).send("Paper already exists");
    } else {
        await paperRef.set(paper);
        res.send("Paper created");
    }
});

router.put("/update", async (req, res) => {
    const paper = req.body;
    const paperRef = db.collection("papers").doc(paper.id);
    const doc = await paperRef.get();
    if (!doc.exists) {
        res.status(404).send("Paper not found");
    } else {
        await paperRef.update(paper);
        res.send("Paper updated");
    }
});

router.delete("/delete", async (req, res) => {
    const paper = req.body;
    const paperRef = db.collection("papers").doc(paper.id);
    const doc = await paperRef.get();
    if (!doc.exists) {
        res.status(404).send("Paper not found");
    } else {
        await paperRef.delete();
        res.send("Paper deleted");
    }
});


module.exports = router;