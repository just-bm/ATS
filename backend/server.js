const express = require('express');
const mongoose = require('mongoose');
const resume = require('./db/resume');
const user = require('./db/user')
const userRouter = require('./Routes/userRoute');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use('/api/auth', userRouter);

try{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("connected successfully");
}catch(error){
    console.log("error is found \n", error);
}





app.listen(5000, ()=>{
    console.log("Application just started");
})