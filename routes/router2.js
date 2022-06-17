const express = require('express');
const router = express.Router();
const model1 = require('../models/Identifier');
const bodyParser = require('body-parser');


router.get('/',async(req,res)=>{
    try {
        const data = model1.find();
        res.json(data);
    } catch (error) {
        res.json({message:true});
    }
});

router.post('/',async(req,res)=>{
    const data = new model1({
        cardCode:req.body.cardCode,
        customer:req.body.customer
    });
})



module.exports = router;