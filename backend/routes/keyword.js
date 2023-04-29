const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();



router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const keywordRef = db.collection('research_interests').where('id', '==', id);
    const snapshot = await keywordRef.get();
    if (snapshot.empty) {
        res.status(404).send('No keyword found');
    } else {
        let keyword = {};
        snapshot.forEach(doc => {
            keyword=doc.data();
        });
        res.send(keyword);
    }
});

module.exports = router;