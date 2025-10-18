const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    // _id:{type:Number, required:true},
    _id: {type: mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    originalFileName: {type:String, required:true},
    history: [
        {
            result: {
                score: { type: Number, required: true },
                feedback: { type: String, required: true },
                strength: { type: String },
                weakness: { type: String }
            },
            analyzedAt: { type: Date, default: Date.now }
        }
    ],
    createdAt:{type:Date, default:Date.now},
})

module.exports = mongoose.model("resume", schema);