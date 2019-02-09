var readline = require('readline');

//to not handle read write timing manually
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Whats your name?', function(answer){
    //invoked when answer given
    console.log(answer + ", hi. Hope you are having a good day!");
    //readline doesnt close. app still running.

    rl.setPrompt(answer + 'hi again! How are you?');
    rl.prompt(); //display the prompt

    //listen for any new line
    rl.on('line',function(reply){
        console.log(reply.trim() + "too");

        //still readline running
        //need to hit ctrl+C
        
        //ekhon bondho hobe
        rl.close();
    });

});

rl.on('close',function(){
    console.log('BYE!');
});