var fs = require("fs");


fs.renameSync("./assets/logs", "./logs");

console.log("logs folder moved successfully");