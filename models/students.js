const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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


// generating tokens
userSchema.methods.generateAuthToken = async function() {
  try {
     let token = jwt.sign({_id : this._id}, process.env.SECRET_KEY); 
     this.tokens = this.tokens.concat({token : token})
     await this.save()
     return token

  } catch (err) {
      console.log(err)
  }
}

const user = mongoose.model("user", userSchema);
module.exports = user;
