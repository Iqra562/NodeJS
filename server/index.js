const http = require("http")
const  fs  = require("fs")

// it will create server 
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
        case "/":
            res.end("Home page");
            break;
        case "/about":
            res.end("I'm node js");
            break;
            default:
                res.end("404 not found") 
        }
        res.end("Hello from server")
    })
    // console.log("New Req Received")
})
myServer.listen(8000,()=>console.log("server Started"))
// req - paremater will get client side infomration like IP address 