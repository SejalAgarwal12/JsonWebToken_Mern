const jwt = require('jsonwebtoken');
const secretKey = require('../configuration/jwt');

function generateToken(user){
    const payload = {
        id : user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'1h'})
}

function refreshToken(user){
    const payload = {
        id : user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'7h'})
}

function verifyToken(token){
    return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = {generateToken, refreshToken, verifyToken}