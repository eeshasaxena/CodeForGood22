const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fid : {
        type : String,
        required : true
    },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String
  },
  motherName: {
    type: String,
    required: true
  },
  classLevel : {
      type : String,
      required : true
  },
  aadharNumber : {
      type : String
  }
});

// hashing passwords
// userSchema.pre("save", async function (next) {
//   const user = this;
//   // console.log("Before Save");
//   if (user.isDirectModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//     user.cpassword = await bcrypt.hash(user.cpassword, 8);
//   }
//   next();
// });


const student = mongoose.model("student", studentSchema);

module.exports = student;
