const mongoose=require('mongoose');

const helpschema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    number:Number,
    problem:String,
})

module.exports=mongoose.model('help',helpschema)