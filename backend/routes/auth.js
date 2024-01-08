const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();
router.post("/login", async (req, res) => {
    const { id, password } = req.body;
    // console.log(id, password);
    const userRef = db.collection("users");
    const docs = await userRef.where("id", "==", id).get();
    if (docs.empty) {
        res.status(404).send("User not found");
    } else {
        let user={}
        let userToken=''
        docs.forEach(doc => {
            user=doc.data()
            userToken = doc.id;
        });
        console.log(user)
        if (user.password === password) {
            res.send({...user, password: undefined,userToken: userToken});
        } else {
            res.status(401).send("Incorrect password");
        }
    }
});

router.post("/profile", async (req, res) => {
    const { userToken } = req.body;
    const userRef = db.collection("users").doc(userToken);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(404).send("User not found");
    } else {
        res.send({...doc.data(),userToken: userToken});
    }
});

module.exports = router;