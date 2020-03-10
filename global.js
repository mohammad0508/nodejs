var http = require('http');
http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text/plain'})
response.end("Mohammad Said \n")
}).listen(8080)
console.log('server running at http://127.0.0.1:8080');
