const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//API routes
app.use("/user", authenticationMiddleware, userAPI);
app.use("/email", integrityCheckMiddleware, emailAPI);
app.use("/paper",authenticationMiddleware, paperAPI);
//Default route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});