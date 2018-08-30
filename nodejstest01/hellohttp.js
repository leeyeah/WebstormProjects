var http=require('http');

http.createServer(function (request , response) {
    response.end("hi from node");
}).listen(8888);