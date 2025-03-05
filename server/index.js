const http = require('http');
const fs = require('fs');
const url = require('url');
const express =  require('express');
const app =express();

app.get('/',(req,res)=>{
 res.send("hello there")
})

app.get('/about',(req,res)=>{
    res.send(`hi ${req.query.name}`)

})
// const handleRoutes = (req,res)=>{
//     if (req.url === "/favicon.ico") return res.end()
//     const log = `${Date.now()} : ${req.url} New req rec \n`;
//     const myURL = url.parse(req.url,true)
//     console.log(myURL)
//     fs.appendFile('log.txt',log,(err,data)=>{
//         switch(myURL.pathname){
//             case '/' :  res.end('this is home page');
//             break;
//             case '/about': 
//             const urlName = myURL.query.name
//             res.end(`Hi ${urlName} `);
//             break;
//             default :res.end("404")
//      } 
//     })
// }



app.listen(800,console.log('your port is running'))

// const myServer  = http.createServer(handleRoutes)

// myServer.listen(8000,()=>console.log("my server is running")) 