const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = 3001;
const admin = require('firebase-admin');
const serviceAccount = require('../../service_account/uiuraas-6bfbc-firebase-adminsdk-1pybo-96784e1487.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uiuraas-6bfbc.firebaseio.com"
});
const authenticationMiddleware = require("./middlewares/authentication");
const {integrityCheckMiddleware} = require("./middlewares/integrityVerifier");
const userAPI = require("./routes/user");
const emailAPI = require("./routes/email");
const paperAPI = require("./routes/paper");
const authAPI = require("./routes/auth");
const keywordAPI = require("./routes/keyword");
const pastworkAPI = require("./routes/pastwork");
const applicationAPI = require("./routes/application");
const groupAPI = require('./routes/group')
const noticesAPI=require('./routes/notices')
const newsAPI=require('./routes/news')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//API routes
app.use("/user", userAPI);
app.use("/email", integrityCheckMiddleware, emailAPI);
app.use("/paper", paperAPI);
app.use("/keyword", keywordAPI);
app.use("/pastwork", pastworkAPI);
app.use("/application", applicationAPI);
app.use("/groups",groupAPI);
app.use("/notices",noticesAPI);
app.use("/news",newsAPI);
//Default route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/auth", authAPI);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});