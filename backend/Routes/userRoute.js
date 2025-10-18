const express = require('express');
const User = require('../db/user');
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post('/signup', async(req, res)=>{
    try{
        const {password, email, user_name} = req.body;
        console.log(password, email, user_name);
        const hashed_password = await bcrypt.hash(password, 10);
        const exisiting_user = await User.findOne({email});
        if(exisiting_user){
            return res.status(400).json({error:"user is already autheticated"});
        }
        const newUser = new User({
            email,
            password:hashed_password,
            user_name
        })
        await newUser.save();
        res.status(200).json({message:"sigin successfull"});
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Cannot authenticate user rn"});

    }
})








router.post('/login', async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error:"invalid creditials"});
        const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'});
        console.log(token);
        res.json({token, user})
    }catch(error){
        console.log(error);
        res.status(500).json({error:"server error"});
    }
})

module.exports = router;