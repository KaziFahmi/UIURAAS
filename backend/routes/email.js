const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();



router.get("/emails", async (req, res) => {
    const emailsRef = db.collection("emails");
    const snapshot = await emailsRef.get();
    if (snapshot.empty) {
        res.status(404).send("No emails found");
    } else {
        const emails = [];
        snapshot.forEach(doc => {
            emails.push(doc.data());
        });
        res.send(emails);
    }
});


router.get("/:emailId", async (req, res) => {
    const emailId = req.params.emailId;
    const emailRef = db.collection("emails").doc(emailId);
    const doc = await emailRef.get();
    if (!doc.exists) {
        res.status(404).send("Email not found");
    } else {
        res.send(doc.data());
    }
});


router.post("/send", async (req, res) => {
    const email = req.body;
    const emailRef = db.collection("emails").doc(email.id);
    const doc = await emailRef.get();
    if (doc.exists) {
        res.status(409).send("Email already exists");
    } else {
        await emailRef.set(email);
        res.send("Email created");
    }
});

router.delete("/delete", async (req, res) => {
    const email = req.body;
    const emailRef = db.collection("emails").doc(email.id);
    const doc = await emailRef.get();
    if (!doc.exists) {
        res.status(404).send("Email not found");
    } else {
        await emailRef.delete();
        res.send("Email deleted");
    }
});

module.exports = router;