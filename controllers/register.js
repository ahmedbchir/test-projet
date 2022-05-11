
const User = require("../Models/userSchema")
const bcrypt = require('bcryptjs')
const  jwt  = require('jsonwebtoken')


const register = async(req,res)=>{
    try{
        const { FirstName,Email,Password } = req.body
        const existuser = await User.findOne({email:Email})
        if (existuser) res.status(400).json({message:"you have an account already registered"})
        const cryptPassword = await bcrypt.hash(Password,12)
        
        const newuser = new User({ FirstName , Email ,Password:cryptPassword} )
        const user = await newuser.save();
        
        const token = await jwt.sign({Email,id:user._id},'GMC2022',{expiresIn:"2h"})
        console.log("hello")
        res.status(200).json({user,token});
    }catch{
        res.status(500).json({message:"somthing went wrong"})
    }
}
module.exports={register}