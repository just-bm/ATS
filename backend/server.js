const express = require('express');
const mongoose = require('mongoose');
const resume = require('./db/resume');
const user = require('./db/user')
const userRouter = require('./Routes/userRoute');

const app = express();
app.use(express.json());
app.use('/api/auth', userRouter);

try{
    mongoose.connect("mongodb+srv://tbalancemurugan_db_user:DD5B6ZQkzwfcDUTR@cluster.fxqhoal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster");
    console.log("connected successfully");
}catch(error){
    console.log("error is found \n", error);
}





app.listen(5000, ()=>{
    console.log("Application just started");
})