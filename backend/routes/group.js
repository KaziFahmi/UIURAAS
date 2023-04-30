const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.get("/all",async (req,res)=>{
    const collection = await db.collection('groups').get();
    // console.log(collection);
    if(collection.empty){
        res.send([]);
    }else{
        const groups = []
        collection.forEach(doc=>{
            groups.push({...doc.data(),id: doc.id});
        })
        // console.log(groups)
        res.send(groups);
    }
})
router.post("/create",async (req,res)=>{
    const group = req.body;
    console.log(group);
    const docref = await db.collection('groups').add(group);
    res.send({status:"success"});
})
router.post("/add",async (req,res) =>{
    console.log(req.body);
    const {groupId, members} = req.body;
    const docref = db.collection("groups").doc(groupId);
    const doc=await docref.get();
    if(doc.empty){
        res.status(401).send({status: "Failed"});
    }else{  
        const memberList=doc.data().members;
        let filtered = memberList.filter(member => !members.includes(member));
        filtered = [...filtered, ...members];
        docref.update({members: filtered});
        res.send({status: "success"});
    }
})
module.exports = router;