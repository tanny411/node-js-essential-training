// console.error('This is an error!');
// console.warn('This is a warning!');





//PRIMITIVE DATA TYPES
const name = 'Aisha'
const age = 30;
const rating = 4.5;
const oops = undefined;
let z;

// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof oops);
// console.log(typeof z);





//ALL ABOUT STRINGS
// console.log('My name is ' + name + ' and I am '+ age + ' years old');

//backticks for template string
hello = `My name is ${name} and I am ${age} years old.`;
// console.log(hello);

//string properties
// console.log(hello.length);

//methods
// console.log(hello.toUpperCase());
// console.log(hello.substring(0, 5)); //[0,5)
// console.log(hello.split('')); //by character
// console.log(hello.split(' ')); //by words






//ARRAYS
const numbers = new Array(1, 4 ,5); //with constructor
const fruits = ['Apple', 'Guava', 10, false]; //typical usage

// console.log(numbers);
// console.log(fruits);

fruits[5] = 'nevermind'; //notice const array manipulation is possible
// console.log(fruits);
/**
 * ["Apple", "Guava", 10, false, empty, "nevermind"]
 */

fruits.push(66); //add to end
fruits.unshift('strawberry'); //add to begining
// console.log(fruits);
/**
 * ["strawberry", "Apple", "Guava", 10, false, empty, "nevermind", 66]
 */

fruits.pop();
const is_array = Array.isArray(fruits);
const ix = fruits.indexOf('Apple');






// OBJECTS
// Key value pairs

const person = {
    firstName : 'Aisha',
    lastName: 'Khatun',
    age: 15, 
    hobbies: ['cooking', 'learning', 'building'],
    address: {
        street: '50 main street',
        city: 'SomeCity',
        state: 'DC'
    }
}

// to extract some values from this object
const {firstName, lastName, address: {city}} = person;
// console.log(firstName, lastName, city);

//add properties
person.email = 'some@gmail.com'

//To JSON
const jsonObject = JSON.stringify(person);
// console.log(jsonObject);
/**
 * {
*     "firstName":"Aisha",
*     "lastName":"Khatun",
*     "age":15,
*     "hobbies":["cooking","learning","building"],
*     "address":{"street":"50 main street",
*     "city":"SomeCity","state":"DC"},
*     "email":"some@gmail.com"
 * }
 */






 //LOOPS
 for(let i=0;i<person.hobbies.length;i++){
    //  console.log(person.hobbies[i]);
 }

 for(let hobby of person.hobbies){
    //  console.log(hobby);
 }

 //high order array methods: forEach, map, filter
person.hobbies.forEach(function(hobby){ 
    //iterate though the array
    // console.log(hobby);
});

const myHobbies = person.hobbies.map(function(hobby){
    //return an array
    return hobby;
});
// console.log(myHobbies);
/**
 * (3) ["cooking", "learning", "building"]
 */

const myBigHobbies = person.hobbies.filter(function(hobby){
    //return a filtered array
    return hobby.length>=8; //the condition
});
// console.log(myBigHobbies);
/**
 * (2) ["learning", "building"]
 */

const myBigHobbiesNames = person.hobbies.filter(function(hobby){
    return hobby.length>=8; //return the object with this condition
}).map(function(hobby){
    return hobby.substring(0,5); //modifies the array
});
// console.log(myBigHobbiesNames);
/**
 * (2) ["learn", "build"]
 */






//CONDITIONALS
// console.log(10=='10' , ' is true; but ', 10==='10', ' is not true because it also matches data types!')

//switch case, ?: operator available





//FUNCTIONS
function addNums(num1 = 5, num2 = 5){
    return num1+num2;
}

//Arrow functions
const addNumsArrow = (num1 = 5, num2 = 5) => {
    return num1+num2;
}
// console.log(addNumsArrow(3,6));

//Single line functions
const addNumsArrowShort = (num1 = 5, num2 = 5) => num1+num2;
// console.log(addNumsArrowShort(0,1));

const squaring = num => num*num;
// console.log(squaring(8));

// person.hobbies.forEach(hobby => console.log(hobby));


