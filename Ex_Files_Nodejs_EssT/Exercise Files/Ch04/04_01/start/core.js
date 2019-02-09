var path = require('path');
var util = require('util');
var v8 = require('v8'); //memory info pawar jonno

var newPath=path.join(__dirname, 'www' , 'aysha' ,'arekFolder');

console.log(newPath);

//also adds date and time stamp
util.log(newPath);

util.log(v8.getHeapStatistics());

