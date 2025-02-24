const http = require('http');
const myServer  = http.createServer((req,res)=>{
console.log("Request accepted")
res.end("Hello from server ")
})

myServer.listen(8000,()=>console.log("my server is running")) 