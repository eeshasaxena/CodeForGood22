const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  pm: {
    //store the uuid of the project manager
    type: String,
    // required: true,
  },
  pa: {
    //store the uuid of the project assistant
    type: String,
    //required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
