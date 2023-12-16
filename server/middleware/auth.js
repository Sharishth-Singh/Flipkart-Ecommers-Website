
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorhandler');
const aysnchandler = require('./aysnchandler');
const UserModel = require('../models/usermodel')


exports.Authorization = aysnchandler(async(req,res,next)=>{
    const {token} = req.cookies


    if(!token){
        return next(new ErrorHandler('Please Login First before Moving further', 400))
    }

    const decode =  jwt.verify(token , "salt")

    req.user = await UserModel.findById(decode.id)

    next()

})

exports.authorizerole = (...roles)=>{
   return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return next( new ErrorHandler('You are not Allowed to Access This Route', 300))
       }   
   next()
   }
   
 
}