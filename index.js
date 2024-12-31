const http =  require('http')
const express = require('express');

const app = express();

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