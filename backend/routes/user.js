const express = require("express");

const router = express.Router();

const admin = require("firebase-admin");
const db = admin.firestore();
router.get("/users", async (req, res) => {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();
    if (snapshot.empty) {
        res.status(404).send("No users found");
    } else {
        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        res.send(users);
    }
});
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(404).send("User not found");
    } else {
        res.send(doc.data());
    }
});

router.post("/create", async (req, res) => {
    const user = req.body;
    const userRef = db.collection("users").doc(user.id);
    const doc = await userRef.get();
    if (doc.exists) {
        res.status(409).send("User already exists");
    } else {
        await userRef.set(user);
        res.send("User created");
    }
});

router.put("/update", async (req, res) => {
    const user = req.body;
    const userRef = db.collection("users").doc(user.id);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(404).send("User not found");
    } else {
        await userRef.update(user);
        res.send("User updated");
    }
});

router.delete("/delete", async (req, res) => {
    const user = req.body;
    const userRef = db.collection("users").doc(user.id);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(404).send("User not found");
    } else {
        await userRef.delete();
        res.send("User deleted");
    }
});




module.exports = router;

