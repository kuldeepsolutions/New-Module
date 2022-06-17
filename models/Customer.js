const mongoose  = require('mongoose');
const customer  = mongoose.model('Customer',new mongoose.Schema({
    name: String,
    age:Number,
    gender:String
}));

module.exports = customer;
