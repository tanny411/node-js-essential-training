//node js comes with a child process module that allows you to
//execute exernal apps in your environment

//spawn and execute

var exec = require('child_process').exec;

//with exec i can run command line
//exec("start https://www.facebook.com");

//exec("start cmd .");

exec("dir",function(err, stdout){
    
    if(err) throw err;
    
    console.log("Listing finished!");
    console.log(stdout);

});