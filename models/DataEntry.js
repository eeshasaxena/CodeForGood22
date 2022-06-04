const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Read from csv and create a new schema
const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");
const dbFile = path.join(__dirname, "../models/Dataset.csv");
//convert csv to json
csv()
  .fromFile(dbFile)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
