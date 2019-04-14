var https = require("https"); 
//https for secured page, depends on which page we want to load
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443, //default of http is port 80, not always true
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) {

	//res is a stream
	
	var responseBody = "";

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode} `);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() {
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});

});

req.on("error", function(err) {
	console.log(`problem with request: ${err.message}`);
});

req.end();

