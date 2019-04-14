//Building a web server

var http = require("http");

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/html"});
	//or text/plain for plain text

	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`); 
	//localhost:3000/whaetevr/polo/lop.html
	//requested url = whaetevr/polo/lop.html

});

server.listen(3000);//port number, on this local machine
//from our browser, we go to localhost:3000 and we can see this

console.log("Server listening on port 3000");