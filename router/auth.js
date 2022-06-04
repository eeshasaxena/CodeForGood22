const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/connection')
const user = require('../models/userSchema')

router.get('/', (req,res) => {
    res.send("Sending from auth")
})

module.exports = router;