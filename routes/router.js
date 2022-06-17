const express = require('express');

const mongoose = require('mongoose');
const router = express.Router();
const Cmodel = require('../models/Customer');

const bodyParser = require('body-parser')
router.get('/',async(req,res)=>{
    try {
        const data  = await Cmodel.find();
        res.json(data);
    } catch (error) {
        res.json({message:error});
    }
});
router.post('/',async(req,res)=>{
    const data = new Cmodel({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender
    });
    try {
        const saveData = await data.save();
        res.json(saveData)
    } catch (error) {
       res.json({Message:true});
    }
});



module.exports = router;