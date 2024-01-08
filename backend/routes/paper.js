const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const db = admin.firestore();
router.use(bodyParser.json());
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



router.get("/bypaperId/:paperId", async (req, res) => {
    const paperId = req.params.paperId;
    const paperRef = db.collection("papers").doc(paperId);
    const doc = await paperRef.get();
    if (!doc.exists) {
        res.status(404).send("Paper not found");
    } else {
        res.send(doc.data());
    }
});
router.get("/bydoi/:doi", async (req, res) => {
    const doi = req.params.doi;
    const paperRef = db.collection("papers").where("doi", "==", doi);
    const snapshot = await paperRef.get();
    if (snapshot.empty) {
        res.status(404).send("Paper not found");
    } else {
        let paper = {};
        snapshot.forEach(doc => {
            paper = doc.data();
        });
        res.send(paper);
    }
});
router.get("/bytitle/:title", async (req, res) => {
    const title = req.params.title;
    const paperRef = db.collection("papers").where("title", "==", title);
    const snapshot = await paperRef.get();
    if (snapshot.empty) {
        res.status(404).send("Paper not found");
    } else {
        let paper = {};
        snapshot.forEach(doc => {
            paper = doc.data();
        });
        res.send(paper);
    }
});
router.get("/byauthor/:author", async (req, res) => {
    const author = req.params.author;
    const paperRef = db.collection("papers").where("author", "==", author);
    const snapshot = await paperRef.get();
    if (snapshot.empty) {
        res.status(404).send("Paper not found");
    } else {
        let paper = [];
        snapshot.forEach(doc => {
            paper.push({...doc.data(),refId: doc.id});
        });
        res.send(paper);
    }
});

        
router.post("/create", async (req, res) => {
    const paper = req.body;
    console.log(paper)
    const paperRef = await db.collection("papers").add(paper);
    res.send({success: true});
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