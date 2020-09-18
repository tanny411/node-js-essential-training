var express = require("express");

var app = express();

//this is our custom middleware function, will we invoked on request
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();// to tell express to move on to the next piece of middleware
});

//middleware = 	customized plugins we can use with express
//to add functionality to our app
//here middleware is express.static

app.use(express.static("./public"));


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;

//this app expects we have a 'dictionary-api' serving our dictionary files