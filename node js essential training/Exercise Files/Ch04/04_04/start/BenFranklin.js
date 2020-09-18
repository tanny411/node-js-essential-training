var Person = require('./lib/person');//.js is assumed

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

george.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");

george.emit('speak', "I donno what to say dear!");
