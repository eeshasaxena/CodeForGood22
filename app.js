const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();

// 3. DATABASE 
dotenv.config({ path : './.env'});
require('./db/connection')
const User = require('./models/userSchema')
console.log(mongoose.connection.readyState)


// 2. MIDDLEWARE
const middleware = (req,res,next) => {
    console.log("middleware running");
    next();
}




// console.log("the code works")

// listen and respond to the requesting stating the server 
const PORTS = process.env.PORT
app.listen(PORTS, () =>{
    console.log('Server is running at', PORTS);
})

