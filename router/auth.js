const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const queryString = require("query-string");
const DataEntry = require("../models/DataEntry");
require("../db/connection");
const user = require("../models/User");

router.get("/", (req, res) => {
  res.send("Sending from auth");
});
//login basic api
//get all fellows for a   pa
//get all pa from pm

// LOGIN AUTHENTICATION
router.post("/login", async (req, res) => {
  try {
    let token;
    const { username, password } = req.body;
    // console.log(username)

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
router.post("/fellow/:pa", async (req, res) => {
  try {
    const pa = req.params.pa;
    const fellows = await user.find({ pa: pa });
    res.json(fellows);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//Fetch all PA's for a given PM  name from the database

router.get("/getpa/byusername", async (req, res) => {
  console.log("Hello");
  try {
    //get username from query params
    const username = req.body.username;
    const pas = await user.findOne({ username: username });
    const allPas = await user.find({ pm: pas.pm });
    res.json(allPas);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//create function to store data into temp file

router.post("/fellow/create-data-entry/:username", async (req, res) => {
  const data = req.body;
  const username = req.params.username;
  //Store data in username.json

  const filePath = `./temp/${username}.json`;
  //open file
  const file = require(filePath);
  //push data to file
  file.push(data);
  //write data to file
  fs.writeFileSync(filePath, JSON.stringify(file));
  //find pa from username
  const User = user.find({ username: username });
  const pa = user.find({ pa: User.pa });
  //Send notification to pa
  const notification = {
    title: "New Data Entry",
    body: `${username} has submitted a new data entry`,
    data: {
      username: username,
      pa: pa.pa,
      pm: pa.pm,
      fellow: pa.fellow,
      type: "data-entry",
    },
  };
  //send notification to pa
  const notificationData = {
    title: notification.title,
    body: notification.body,
    data: notification.data,
  };
  //send notification to pa using socket
  io.emit("notification", notificationData);
  res.json({ message: "Data entry created" });
});

module.exports = router;
