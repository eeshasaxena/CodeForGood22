const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

// 3. DATABASE
dotenv.config({ path: "./.env" });
require("./db/connection");
const User = require("./models/userSchema");
console.log(mongoose.connection.readyState);

// 2. MIDDLEWARE
const middleware = (req, res, next) => {
  console.log("middleware running");
  next();
};

// creating middleware for auth.js to convert data into json or to read im not sure
app.use(express.json())
// get the request sent by the user
app.use(require('./router/auth'))


// listen and respond to the requesting stating the server
const PORTS = process.env.PORT;
app.listen(PORTS, () => {
  console.log("Server is running at", PORTS);
});
