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
mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(()=>console.log('mongo db connected'))
.catch((err)=>console.log('error',err))
const User = mongoose.model('user',userSchema)
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