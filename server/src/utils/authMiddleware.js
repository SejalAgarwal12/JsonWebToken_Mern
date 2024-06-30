const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    const authHeader = req.header("Authorization");
    console.log(authHeader)
    if(!authHeader){
        res.status(401).json({message:"Unauthorised: Missing token"})
    }
    const [bearer, token] = authHeader.split(" ");
    if(!token || bearer!== "Bearer"){
        res.status(401).json({message:"Unauthorised: Invalid  token format "})
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err){
            res.status(403).json({message:"Forbidden : Invalid token"})
        }
        req.user = user;
        console.log(user);
        next();
    })
}


module.exports = {authenticateToken}