const bcrypt = require('bcrypt');
const User = require('../models/User');
const {generateToken} = require('../utils/auth');

async function login(req,res){
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(email);
        console.log(password);
        const user = await User.findOne({"email":email});
        if(!user){
            throw new Error('user-email doesnot exist')
        }else{
            // comapre password entere by user with the hashedOne
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                throw new Error('invalid password')
            }
            const token  = generateToken(user);
            res.status(200).json({message:'loggedIn successfull', user:user, token:token})
        }
        
    } catch (error) {
        // res.status(401).json({message:"invalid credentials"})
        console.log(error);
    }
    
}

module.exports = {login}