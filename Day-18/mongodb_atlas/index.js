const express=require('express');
const app=express();
const port=3000;
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const User=require('./models/users.model')
dotenv.config();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to db")
})

app.use('/create',async(req,res)=>{
  try{
    User.create({
        name:req.body.name,
        password:req.body.password
    })
    res.json({status:"ok"})

  }catch(err){
    res.json({status:"not okay"})
  }
})
app.listen(port,()=>{
    console.log("The app is running on port "+port)
})