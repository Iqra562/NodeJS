const http = require('http');
const fs = require('fs');
const url = require('url');
const myServer  = http.createServer((req,res)=>{
    if (req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()} : ${req.url} New req rec \n`;
    const myURL = url.parse(req.url,true)
    console.log(myURL)
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myURL.pathname){
            case '/' :  res.end('this is home page');
            break;
            case '/about': 
            const urlName = myURL.query.name
            res.end(`Hi ${urlName} `);
            break;
            default :res.end("404")
     } 
    })
})

myServer.listen(8000,()=>console.log("my server is running")) 