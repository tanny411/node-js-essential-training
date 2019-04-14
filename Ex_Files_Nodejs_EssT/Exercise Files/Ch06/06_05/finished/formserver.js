var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

	if (req.method === "GET") {
		res.writeHead(200, {"Content-Type": "text/html"});
	    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
	} else if (req.method === "POST") {

		var body = "";

		req.on("data", function(chunk) {
			body += chunk;
		});
		//body=first=aysha&last=kamal&email=aysha.kamal7%40gmail.com
		//if we needed to use these variables, example for database
		//we had to parse this string
		req.on("end", function() {

			res.writeHead(200, {"Content-Type": "text/html"});

			res.end(`

				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your Form Results</h1>
						<p>${body}</p>
					</body>
				</html>

			`);


		});


	}

	

}).listen(3000);

console.log("Form server listening on port 3000");
