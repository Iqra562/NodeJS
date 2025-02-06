const http =  require('http')
const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');

const app = express();
const userSchema = new mongoose.Schema({
  firstName :{
    type :String,
    required:true,
  },
  lastName :{
    type :String,
  },
  email :{
    type :String,
    required:true,
    unique:true,
  },
  jobTile :{
    type :String,
  },
  gender :{
    type :String,
  },
}) 
mongoose.connect('mongodb+srv://iqra44938:vWAOuchONXPhdaHT@cluster0.mxfbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connectejhjkwehd!'))
  .catch((err)=>console.log('error',err))
  // mongoose.connect('mongodb+srv://iqra44938:0h70s8xmdVd6G2J4@cluster0.yarkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  const User = mongoose.model('user',userSchema)

  app.post('/api/users',async(req,res)=>{
    const body = req.body 
  const result =   await User.create({
      firstName:body.firstName,
      lastName:body.lastName,

    })
    console.log(result)
  })
  return res.status(201).json({msg:"success"})
app.get("/",(req,res)=>{
   return res.send("Hello from home page")
})
 


app.get("/about",(req , res )=>{
//   return res.send("Hello from about " + "hey " + req.query.name )
  return res.send(`Hello ${ req.query.name} `)
})

app.listen(8000,()=>console.log("Server started"))

// const myServer =http.createServer(app);
// myServer.listen(8000,()=>console.log("server started"))