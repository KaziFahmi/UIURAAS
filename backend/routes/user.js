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
// router.get("/querybyid/:userId", async (req, res) => {
//     const userId = req.params.userId;
//     const userRef = db.collection("users").where("id", "==", userId);
//     const doc = await userRef.get();
//     if (doc.empty) {
//         res.status(404).send("User not found");
//     } else {
//         let user = {};
//         doc.forEach(doc => {
//             user = doc.data();
//         });
//         res.send(user);
//     }
// });

router.post("/create", async (req, res) => {
    const user = req.body;
    const userRef = db.collection("users").doc(user.id);
    const doc = await userRef.get();
    if (doc.exists) {
        res.status(409).send("User already exists");
    } else {
        await userRef.set(user);
        res.send({success: true});
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
router.get("/professors", async (req, res) => {
    const professorsRef = db.collection("users").where("type", "==", "professor");
    // console.log(professorsRef)
    const snapshot = await professorsRef.get();
    if (snapshot.empty) {
        res.status(404).send("No professors found");
    } else {
        const professors = [];
        snapshot.forEach(doc => {
            professors.push(doc.data());
        });
        res.send(professors);
    }
});
router.get("/students", async (req, res) => {
    const studentsRef = db.collection("users").where("type", "==", "student");
    const snapshot = await studentsRef.get();
    if (snapshot.empty) {
        res.status(404).send("No students found");
    } else {
        const students = [];
        snapshot.forEach(doc => {
            students.push(doc.data());
        });
        res.send(students);
    }
});
router.get("/querybyid/:userId", async (req, res) => {
    const userId = req.params.userId;
    const userRef = db.collection("users").where("id", "==", userId);
    const doc = await userRef.get();
    if (doc.empty) {
        res.status(404).send("User not found");
    } else {
        let user = {};
        doc.forEach(doc => {
            user = {...doc.data(),refId:doc.id};
        });
        res.send(user);
    }
});

router.get("/querybytoken/:userId", async (req, res) => {
    const userId = req.params.userId;
    // console.log(userId);
    const doc = await db.collection("users").doc(userId).get();
    // const doc = await userRef.get();
    // console.log(doc)
    if (doc.empty) {
        res.status(404).send("User not found");
    } else {
        const data=doc.data();
        // console.log(data);
        res.send({...doc.data(),password: ''});
    }
});




module.exports = router;

