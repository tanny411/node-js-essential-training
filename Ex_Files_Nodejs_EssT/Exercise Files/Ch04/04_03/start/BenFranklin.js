/*var events = require('events');

var emitter = new events.EventEmitter();


emitter.on('customEvent',function(message, status){
    //invoked when custom event is raised
    console.log(`${status}: ${message}`);
});

emitter.emit('customEvent' , "Hello World" ,"200"); //message and status of 'on'
*/

//custom events raised by custom objects and handled Asynchronously
var EventEmitter=require('events').EventEmitter;
var util = require('util');

var Person = function(name){ //in javascript, object is a function
    this.name = name;
}

util.inherits(Person, EventEmitter); //person inherits eventEmitter

var tanny = new Person("tanny411");

tanny.on('speak',function(said){
    console.log(this.name + " said " + said);
});

tanny.emit('speak','I am Awesome');

