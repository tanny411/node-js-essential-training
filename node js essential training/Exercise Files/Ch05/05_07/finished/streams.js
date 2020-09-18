var fs = require("fs");

//if we use fs.readFile , it will read the entire file into a variable
var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

//the very first data event/ reading chunks fires this
stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

//reads a chunk of the file
stream.on("data", function(chunk) {
	process.stdout.write(`  chunk: ${chunk.length} |`);
	data += chunk;
}); 

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});