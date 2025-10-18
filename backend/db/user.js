const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id : Number,
    email : {type:String, required:true},
    password: Number,
    user_name: String
});

// const userSchema = mongoose.Schema(schema);
module.export = mongoose.model("User", schema);