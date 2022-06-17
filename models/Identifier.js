const mongoose =require('mongoose');
const customer = require('./Customer');
const Identifier = mongoose.model("Identifier",new mongoose.Schema({
    cardCode:Number,
    customer:{
       type: mongoose.Schema.Types.ObejctID,
        ref:customer
    }
})
);
module.exports  = Identifier;