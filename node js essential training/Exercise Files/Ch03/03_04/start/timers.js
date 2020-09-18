//another way to communicate with js asynchronously is timing functions

var waitTime=5000;//5 seconds
var currentTime=0;
var waitInterval=500;

/*
var interval = setInterval(function(){
    currentTime+=waitInterval;
    console.log(`waiting ${currentTime/1000} seconds...`);
},waitInterval);
*/

//while it waits, our app is still going to be running
setTimeout(function(){
    clearInterval(interval);//to stop the interval
    console.log("Done");
},waitTime);

function what(p){
    process.stdout.clearLine();//clears the last line we wrote in console
    process.stdout.cursorTo(0);//takes cursor to the beginning of the line
    process.stdout.write(p/1000+' seconds elapsed...');
}

var interval = setInterval(function(){
    currentTime+=waitInterval;
    what(currentTime);
},waitInterval);