const http = require('http');

const sayHello =(request,response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
response.write("hello worlsdsd");
response.end();

}

http.createServer(sayHello).listen(1000)