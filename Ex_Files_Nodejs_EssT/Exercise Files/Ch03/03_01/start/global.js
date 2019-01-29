var path = require("path");

//console.log("Aysha")

var str="not global"

console.log(global.str) //undefined
console.log(str)

//variables withon string
console.log(`Aysha is saying ${str}`)

//full path of folder
//console.log(__dirname)

//full path to the file
//console.log(__filename)

//plucking filename
console.log(`filename is ${path.basename(__filename)}`)