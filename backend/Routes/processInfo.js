const express = require('express');
const ai_function = require('../Ai/google');
const router = express.Router();

router.post('/upload', async(req, res)=>{
    try{
        const body = req.body;
        const title = body.Titles;
        const desc = body.Description;
        const yoe = body.Expericence;
        const text = body.Extracted;
        const userId = body.userId;

        // console.log(title, desc, yoe, text);
        let response = await ai_function(desc, title, text, yoe);
        console.log(response);
        response = response.slice(0, -3);
        response = response.slice(7); // Remove ```json

        const parsed = JSON.parse(response);
        console.log(parsed);
        // user.history.push({
        //     jtitle: title,
        //     jobDescription: desc,
        //     extractedText: text,
        //     aiResult: parsed
        // });
        
        // await user.save();
        res.status(200).json(parsed);



        // res.status(200).json(parsed);
    }catch(error){
        console.log(error);
        res.status(500);
    }
})

module.exports = router;