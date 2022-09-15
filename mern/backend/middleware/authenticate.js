const jwt = require('jsonwebtoken');
const User = require("../models/user.model");


const authenticate = async (res, next, req) =>{
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
         if(!rootUser) throw new Error(`Could not find user`);

         req.token = token;
         req.rootUser = rootUser;
         req.userId = rootUser._id;
         next();

    }catch(err){
        
        console.log(err);
    }

}

module.exports =authenticate;