const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    // _id : Number,
    email : {type:String, required:true},
    password: String,
    user_name: String
});

const User = mongoose.model("User",schema);
module.exports = User;