## Javascript

- High level interpreted language, doesn't need a compiler to run through first, as we do in Java or C++.
- The most popular implementation of ECMAScript specification
- Multi-paragidm: I can write my js code in OOP way, functional code, don't matter!
- Runs on client/browser as well as server (node.js)
- Can build interactive interfaces with js frameworks like React, Angular, Vue
- Mobile Apps with React Native, Native SCript, Ionic
- Desktop apps with ElectronJS


### Notes:
- Use live server extension in vscode to view html live.
- Put js at the end of body, you want your html and css to load first. Better yet, a separate js file, still at the bottom of body.
- Best js documentation: mdn or mozilla developer network
- Variables:
    - var: globally scoped, don't use it anymore
    - let: block level scoped, its a variable
    - const: block level scoped, cannot reassign values. Have to add a value to it in initialization. We can change const array values, just cannot reassign the whole thing.
- Always use const, unless you know you have to reassign a value to it.