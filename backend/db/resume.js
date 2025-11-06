const mongoose = require('mongoose');
// const schema = new mongoose.Schema({
//     // _id:{type:Number, required:true},
//     _id: {type: mongoose.Schema.Types.ObjectId, ref:"user", required:true},
//     jtitle: {type:String, required:true},
//     jdescription: {type: String, required:true},
//     history: [
//         {
//             result: {
//                 extracted: {type: String, required: true},
//                 score: { type: Number, required: true },
//                 feedback: { type: String, required: true },
//                 strength: { type: [String] },
//                 weakness: { type: [String] }
//             },
//             analyzedAt: { type: Date, default: Date.now }
//         }
//     ],
//     createdAt:{type:Date, default:Date.now},
// })


// User Schema (if you have one)
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    history: [
        {
            jtitle: {type: String, required: true},
            jobDescription: {type: String, required: true},
            extractedText: {type: String, required: true},
            aiResult: {type: Object, required: true},
            analyzedAt: {type: Date, default: Date.now}
        }
    ]
});
module.exports = mongoose.model("resume", userSchema);