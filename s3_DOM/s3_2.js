// traversy element (child and parent node) & create element & remove and replace element
// better all use element , not node for convenient

let val;

const list= document.querySelector('ul.collection');
const listItem= document.querySelector('li.collection-item:first-child');

val=listItem;
val= list;

// get child nodes => give different elements
val= list.childNodes;

// get child elements **
val =list.children;
val =list.children[1];
val =list.children[1].textContent;


// children of children
val= list.children[1].children[0];

// element of children
val= list.firstElementChild;

// get parent node either
val =listItem.parentNode;
val =listItem.parentElement;

// parent de parent
val =listItem.parentElement.parentElement;

// Get next sibling return text
val = listItem.nextSibling;
val = listItem.nextElementSibling;
// null because it is the first element
// val = listItem.previousElementSibling;

console.log(val);


// Create element **

const li= document.createElement('li');

// add a class 
li.className= 'collection-item';


li.setAttribute('title','New item');
// add id  **
li.id='new-item'

// create text node and append **

li.appendChild(document.createTextNode('Hello Worldddd'));

// create new link element
const link=document.createElement('a');
// add class
link.className= 'delete-item secondary-content';
// add icon html **
link.innerHTML = `<i class="fa fa-remove"></i>`;

// append link into li
li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);

//  28 removing and replace

const newHeading = document.createElement('h2');
// add id
newHeading.id='task-title';
// APPEND
newHeading.appendChild(document.createTextNode('Task List o'));

// get old heading
const oldHeading= document.getElementById('task-title');
const cardAction= document.querySelector('.card-action');

// replace

cardAction.replaceChild(newHeading,oldHeading);

//  remove

const lis1= document.querySelectorAll('li');
const list1= document.querySelector('ul');

// remove list items
lis1[0].remove();

list1.removeChild(lis1[3]);

console.log(newHeading);
console.log(cardAction);


// Class and ATTR

const firstLi= document.querySelector('li:first-child');

// anchor in li tag
const Li1=firstLi.children[0];

console.log(Li1);

// Classess

let value;

value=Li1.className;
value=Li1.classList[0];
//  to remove or add a class
Li1.classList.add('testing');
Li1.classList.remove('testing');


// classlist is not array, it is domtoken **
value=Li1.classList;

// Attribute
value=Li1.getAttribute('href');
value=Li1.setAttribute('href','https://www.google.com/');
// hasatrribute
value=Li1.setAttribute('title','Google');
// value.Li1.hasAttribute('title');
Li1.removeAttribute('title');
value=Li1;
console.log(value);