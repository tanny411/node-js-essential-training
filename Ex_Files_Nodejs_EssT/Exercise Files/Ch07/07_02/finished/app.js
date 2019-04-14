/* jshint esnext: true */
//when run jshint and accept es6 syntax

var http = require("http");

http.createServer(function(req, res) {

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello World</h1>
         <p>This is a web server running from node js</p>
     </html> 
   `);

}).listen(3000);

console.log("Web Server running http://localhost:3000");
