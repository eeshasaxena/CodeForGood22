const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const queryString = require("query-string");
const DataEntry = require("../models/DataEntry");
require("../db/connection");
const user = require("../models/User");

router.get("/", (req, res) => {
  res.send("Sending from auth");
});

//login basic api
//get all fellows for a  pa
//get all pa from pm

// 1. LOGIN AUTHENTICATION
router.post("/login", async (req, res) => {
  try {
    let token;
    const { username, password } = req.body;
    console.log(username)

    if (!username || !password) {
      res.status(400).json({ error: "fill all the fields " });
    }

    const userLogin = await user.findOne({ username: username });
    // console.log(userLogin)
    // token auth
    token = await userLogin.generateAuthToken();
    console.log(token);

    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 258922000000),
      httpOnly: true,
    });

    if (userLogin) {
      // match password
      console.log(userLogin.password);
      console.log(password);
      // const isMatch =  compare(password, userLogin.password)
      // console.log(isMatch)
      if (password == userLogin.password) {
        res.status(200).json({ message: "User logged in " });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    res.status(404).json({ err });
  }
});

// Fetch all fellows for a given PA from the database
router.get("/fellow/username", async (req, res) => {
  try {
    const username = req.body.username;
    const findPA = await user.findOne({ username: username });
    const fellows = await user.find({ pa: findPA.id, role: "fellow" });
    res.json(fellows);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// 3. Fetch all PA's for a given PM  name from the database

router.get("/pa/username", async (req, res) => {
  console.log("Hello");
  try {
    //get username from query params
    const username = req.body.username;
    const pas = await user.findOne({ username });
    console.log(pas);
    const allPas = await user.find({ pm: pas.id, role: "pa" });
    res.json(allPas);
  } catch (err) {
    res.status(404).json({ err });
  }
});

// 4. DataEntry for authorization
router.post("/fellow", async (req, res) => {
  // const {id, isAuthorized, month} = req.body;
  // console.log(id);
  // console.log(month);

  const newEntry = new DataEntry(req.body);
  const entryExist = await DataEntry.findOne({ id: req.body.id });

  if (entryExist) {
    res.status(422).send({ error: "entry already exists" });
  } else {
    try {
      console.log("something");
      await newEntry.save();
      return res.status(201).json({ message: "entry registered succesfully" });
    } catch (error) {
      return res.status(400).json({ error: "Failed to enter data" });
    }
  }
});

// 5. Get DataEntry for auth
router.get("/pa", async (req, res) => {
  const data = await DataEntry.find({ isAuthorized: false });
  console.log(data);
  res.send(data);
});

// 6. Accepting the request from the fellow
router.post("/pa/accept", async (req, res) => {
  const data = await DataEntry.find({ id: req.body.id });
  //findOne and Update
  await DataEntry.updateOne({ id: req.body.id }, { isAuthorized: true });
  res.status(200).send({ message: "entry accepted" });
});

// 7. pa rejects incoming fellow request
router.post("/pa/reject", async (req, res) => {
  DataEntry.remove({ id: req.body.id });
  res.status(200).send({ message: "entry rejected" });
});
module.exports = router;
