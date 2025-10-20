const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const fs = require('fs');
const router = express.Router();
const upload = multer({dest:'uploads/'});

router.post('/upload', upload.single('file'), async(req, res)=>{
    
    if(!req.file){
        return res.status(400).json({error:"what is wrong with you, upload a pdf bro...."});
    }

    try{
        const dataBuffer = fs.readFileSync(req.file.path);
        const data = await pdf(dataBuffer);
        const pdf_content = data.text;

        res.status(200).send(pdf_content).json({message:"file is parsed successfully"});

        fs.unlinkSync(req.file.path);

    }catch(error){
        console.error('Error parsing PDF:', error);
        res.status(500).send('Error parsing PDF.');
    }
    console.log("lsdfdjfd")
})

module.exports = router;