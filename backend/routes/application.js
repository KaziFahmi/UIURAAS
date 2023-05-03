const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();
router.post("/getApplications", async (req, res) => {
    const { id } = req.body;
    const userRef = db.collection("applications").where("researcherId", "==", id);
    const docs = await userRef.get();
    if (docs.empty) {
        res.status(404).send("User not found");
    } else {
        let applications = [];
        docs.forEach(doc => {
            applications.push({...doc.data(),formId: doc.id});
        });
        res.send(applications);
    }
});
router.delete("/deleteApplication", async (req, res) => {
    const { id } = req.body;
    console.log(id)
    const userRef = db.collection("applications").doc(id);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(404).send("User not found");
    } else {
        await userRef.delete();
        res.send({status: 'success'});
    }
});
router.delete("/deleteApplications", async (req, res) => {
    const { ids } = req.body;
    console.log(ids)
    const collection = db.collection("applications");
    ids.forEach(async (id) => {
        const userRef = collection.doc(id);
        const doc = await userRef.get();
        if (!doc.exists) {
            res.status(404).send("User not found");
        } else {
            await userRef.delete();
        }
    })
    res.send({status: 'success'});
    

});
router.post("/create", async (req, res) => {
    const applications = req.body;
    const newsRef = await db.collection("applications").add(applications);
    res.send({success: true});
    console.log(applications);
});




module.exports = router;