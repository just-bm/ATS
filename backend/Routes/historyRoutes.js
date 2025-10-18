const express = require('express');
const router = express.Router();

const History = require('../db/resume');


router.get('/history/:id', async(req, res)=>{
    try{
        const user_id = req.params.id;
        const user_info = History.findById(user_id); 
        console.log(user_info["history"]);
        res.status(200);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"cannot be able to fetch the history of the user"});
    }
})


module.exports = router;