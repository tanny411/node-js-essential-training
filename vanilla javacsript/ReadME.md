## Vanilla Javascript

- High level interpreted language, doesn't need a compiler to run through first, as we do in Java or C++.
- The most popular implementation of ECMAScript specification
- Multi-paragidm: I can write my js code in OOP way, functional code, don't matter!
- Runs on client/browser as well as server (node.js)
- Can build interactive interfaces with js frameworks like React, Angular, Vue
- Mobile Apps with React Native, Native SCript, Ionic
- Desktop apps with ElectronJS

## Content

### Basic Programming:
- Primitive Data types
- Strings
- Arrays
- Object literals
- Loops
    - Higher order array methods: forEach, map, filter
- Functions:
    - Arrow functions

### OOP
- Constructor functions
- Prototypes: You may not want the functions of the class for all the object instances. So prototypes help add funcitons afterwards.
- Class: Or, you may use classes introduced in ES6, that use the keyword `class` and have a `constructor` method. All methods defined inside the class as added as `prototype` to the object. 

### DOM
- Parent of browser is the `window` object, which we don't need to call explicitly. Test this: `console.log(window)`.
- Recommended to use `querySelector` and `querySelectorAll`. We can use them with array methods.
- Some of the attributes to tweak would be `.textContent`, `.innerText`, `.innerHTML`, `.style` etc.
- Event can be mouse click events, hover, mouse out etc. Keyboard inputs such as input.
- With event we can change dom elements, remove elements, **create** and append to existing dom elements. Toggle classes.




### Notes:
- Use live server extension in vscode to view html live.
- Put js at the end of body, you want your html and css to load first. Better yet, a separate js file, still at the bottom of body.
- Best js documentation: mdn or mozilla developer network
- Variables:
    - var: globally scoped, don't use it anymore
    - let: block level scoped, its a variable
    - const: block level scoped, cannot reassign values. Have to add a value to it in initialization. We can change const array values, just cannot reassign the whole thing.
- Always use const, unless you know you have to reassign a value to it.