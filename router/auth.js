const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/connection");
const user = require("../models/User");

router.get("/", (req, res) => {
  res.send("Sending from auth");
});
//login basic api
//get all fellows for a  pa
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
router.get("/fellow/:pa", async (req, res) => {
  try {
    const pa = req.params.pa;
    const fellows = await user.find({ pa: pa });
    res.json(fellows);
  } catch (err) {
    res.status(404).json({ err });
  }
});

//Fetch all PA's for a given PM from the database
router.get("/pa/:pm", async (req, res) => {
  try {
    const pm = req.params.pm;
    const pas = await user.find({ pm: pm });
    res.json(pas);
  } catch (err) {
    res.status(404).json({ err });
  }
});

module.exports = router;
