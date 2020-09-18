process.stdout.write("Hello");
process.stdout.write("No New Line");
//console log prints new line automatically, plus it actually uses process.stdout.write()

function ask() {
    process.stdout.write(`\n\n\n\n whats your name?`);
    process.stdout.write("  >  ");
}

//this fires when user enters data and presses enter
process.stdin.on('data',function(data){
    //process.stdout.write('\n'+data.toString().trim()+'\n');
    //this shit wont stop taking inputs, we have to enter ctrl+C to stop the app
    
    process.exit();
    //this line will help exit

});

process.on('exit',function(){
    //just before exiting these will run
    process.stdout.write('Thats all, bye!');
});

ask(); 