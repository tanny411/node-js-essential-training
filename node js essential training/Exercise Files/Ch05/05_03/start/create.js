var fs = require('fs');

var md = `

Heading 1
=========

Subheading maybe
----------------

* point 1
* point 2

`;

//this is asynchronously, can be done synchronously too
fs.writeFile('sample.md',md.trim(),function(err){
    console.log('File created');
})