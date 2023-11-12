const express=require('express')
require('./db/config')
const User=require('./db/Users')
const Course=require('./db/Course')
const helpdesk=require('./db/Help')
const cors=require('cors')
const app=express()
app.use(cors())

app.use(express.json())

app.post("/signup",async (req,res)=>{
    let user=new User(req.body)
   let result=await user.save() 
    result=result.toObject();
    delete result.password
    res.send(result)
})

app.post('/login',async (req,res)=>{
    if(req.body.email && req.body.password){
        let result=await User.findOne(req.body).select("-password")
        if(result){
            res.send(result)
        }else{
            res.send({result:"No user found"})
        }
    }else{
        res.send({result:"No user found"})
    }
})


app.post('/help',async (req,res)=>{
    let help = new helpdesk(req.body);
    let result = await help.save();
    res.send(result);
    console.log(result)
})

app.listen(5000);