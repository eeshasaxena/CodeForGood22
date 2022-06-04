const express = require("express");
const DataEntry = require("./models/DataEntry");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
require("./models/DataEntry");
// 3. DATABASE
dotenv.config({ path: "./.env" });
require("./db/connection");
const User = require("./models/User");
const uuid = require("uuid");
// 2. MIDDLEWARE
const middleware = (req, res, next) => {
  console.log("middleware running");
  next();
};

//const userapp = require("./models/fellow");
//app.use("/user-api", userapp);

// creating middleware for auth.js to convert data into json or to read im not sure
app.use(express.json());
// get the request sent by the user

app.use(require("./router/auth"));

//console.log(uuid.v5());
//Create User which is fellow
app.post("/user-api/create", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/fellow/postdata", async (req, res) => {
  const ds = new DataEntry(req.body);
  console.log(ds);
  try {
    await ds.save();
    res.json({ message: "Data entry created" });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// listen and respond to the requesting stating the server
const PORTS = process.env.PORT;
app.listen(PORTS, () => {
  console.log("Server is running at", PORTS);
});
