
const express  = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const router = require('./routes/router');

const router1 = require('./routes/router2');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/user',router);
app.use('/identi',router2);






mongoose.connect(process.env.CONN,{useNewUrlParser:true},()=>{
    console.log("Connected to Database :myDB");
});

app.listen(process.env.PORT||4000,()=>{
    console.log("Server Started on : http://localhost:4000");
})