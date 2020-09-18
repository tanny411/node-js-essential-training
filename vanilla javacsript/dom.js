// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
//Gives a NodeList on which we can use array methods
// Output:
// NodeList(3) [li.item, li.item, li.item]

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));
//Gives HTMLCollection, which has to be converted to array to use array methods

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

/** Output:
HTMLCollection(3) [li.item, li.item, li.item]
HTMLCollection(3) [li.item, li.item, li.item]0: li.item1: li.item2: li.itemlength: 3__proto__: HTMLCollection
<li class=​"item">​Item 1​</li>​
<li class=​"item">​Item 2​</li>​
<li class=​"item">​Item 3​</li>​
*/

console.clear();







// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'green';






// EVENTS

// Mouse Event
// Other mouse event: hover, mouseout (see doc)
// btn.addEventListener('click', e => {
//     e.preventDefault(); 
//     //the form reloads the page, so prevent it with this
//     console.log(e.target.className);
//     //TRY THIS console.log(e)
//     //e.target gives the actual element that the button is on
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });
  
  // Keyboard Event
//   const nameInput = document.querySelector('#name');
//   nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
//   });
  






// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}