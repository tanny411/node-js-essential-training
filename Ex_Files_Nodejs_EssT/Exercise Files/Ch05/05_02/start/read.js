//if we dont give any encoding, fs will read files as binary

var fs = require('fs');

//reading synchronously
// var contents = fs.readFileSync('./lib/sayings.md','UTF-8');
// console.log(contents);

//reading asynchronously
fs.readFile('./lib/sayings.md','UTF-8',function(err,contents){
    if (err){
        console.log(err);
    }
    console.log(contents);
});