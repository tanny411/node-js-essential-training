var fs = require('fs');

//reading files synchronously
//we like to use synchronous commands when we start an app
// var files = fs.readdirSync('./lib');
// console.log(files);

//reading files Asynchronously
fs.readdir('./lib',function(err,files){
    if(err){
        throw err;
    }
    console.log(files);
});

console.log('Reading Files...');