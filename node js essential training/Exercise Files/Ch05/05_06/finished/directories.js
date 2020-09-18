var fs = require("fs");

//cant remove a directory unless its empty

fs.readdirSync("./logs").forEach(function(fileName) {

	fs.unlinkSync("./logs/" + fileName);

});

fs.rmdir("./logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});