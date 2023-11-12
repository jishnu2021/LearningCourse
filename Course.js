const mongoose=require('mongoose')

const courseschema=new mongoose.Schema({
    cname:String,
    cfees:Number,
    Duration:String,
})

module.exports=mongoose.model('courses',courseschema)