const User = require('../models/User');
const bcrypt = require('bcrypt');

async function signUpUser(req,res){
    try {
        const {firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            role:"customer"
        });
        const savedUser = await newUser.save();
        res.status(200).json({message:"user created succeefully", user:savedUser})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

module.exports = {signUpUser}