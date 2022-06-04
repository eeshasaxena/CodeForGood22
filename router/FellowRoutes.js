require("../db/connection");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORTS = process.env.PORT;
//get all fellows from pa

//list pa from pm
