const http = require('http');
const fs = require('fs')
const myServer  = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} New req rec \n`
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/' :  res.end('this is home page');
            break;
            case '/about':   res.end('this is about page');
            break;
            default :res.end("404")
     }
    })
})

myServer.listen(8000,()=>console.log("my server is running")) 