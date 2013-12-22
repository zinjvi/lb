console.log('hello');

var http = require("http");

var g = global;

console.log(g);

//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(8888);