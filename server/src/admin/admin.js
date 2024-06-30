const User = require('../models/User');
const bcrypt = require('bcrypt');

async function createAdmin(){
    try {
        const existingAdmin = await User.findOne({email:"admin@123"})
        // admin will have email admin@test
        // if this mail exist else create admin account
        if(existingAdmin){
            console.log("admin account already exist")
        }else{
            const newAdmin = new User({
                firstName:"admin",
                lastName :"123",
                email : "admin@123",
                // password is admin which will be hashed
                password : await bcrypt.hash("admin@123", 10),
                role: "admin"
            });
            await newAdmin.save();
            console.log("admin account created successfully")
        }
    } catch (error) {
        console.log(error.message)
    }   
}

module.exports = {createAdmin}