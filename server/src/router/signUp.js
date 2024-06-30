const express = require('express');
const router = express.Router();
const {signUpUser} = require('../controller/SignUp');

router.post('/register', signUpUser);


module.exports = router;

//    "firstName" : "sejal",
//    "lastName" : "agarwal",
//    "email" : "sejal@123",
//    "password" : "sejal@123"