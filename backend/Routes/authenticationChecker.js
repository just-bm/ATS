const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer","");
    if(!token){
        return res.status(401).json({error:"No token, user is not authenticated"});
    }
    try{
        const decoded = jwt.verify(token, "secret_key");
        req.userId = decoded.userId;
        next();
    }catch(error){
        res.status(401).json({error:"Token is not valied"});
    }
}
module.exports = auth;