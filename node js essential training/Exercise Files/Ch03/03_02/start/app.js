//console.log(process.argv)

/*
giving extra info also reflected in process.argv
like if we call by :
node app.js --user Aysha --greeting "Hello"
node app.js --user aysha is awesome

this is a way to give information into the app when we start it!
*/

function grab(flag){
    var index=process.argv.indexOf(flag);
    return (index === -1)?null:process.argv[index+1];
}

var greeting = grab("--greeting");
console.log(greeting);