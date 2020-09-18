//is made for longer ongoing processes with large amount of data
//unlike exec() which stops execution

var spawn = require('child_process').spawn;

var cp = spawn("node",["alwaysTalking"]);//also in terminal

cp.stdout.on('data',function(data){
    console.log(`STDOUT -> ${data}`);
});

cp.on('close',function(){
    //when alwaysaTalking process ends, we will also exit this process
    console.log("Child process ended");
    process.exit();
});

setTimeout(function(){
    cp.stdin.write("stop");//sending "stop" to the terminal
},7000);
