// document object & dom selector for single element & multiple element

let val;

// whole document
val = document;

// document all tag in array
val= document.all;
// specific content of tag

val= document.all[2];
// property of document
val= document.all.length;
val=document.body;
val=document.head;
val=document.domain;
val=document.URL;
val=document.charset;
val=document.contentType;

// not recommend options
val= document.forms;
val= document.forms[0];
val= document.forms[0].id;
// action method 

val=document.links;
val=document.links[0];
val=document.links[0].className;
// show class in list
val=document.links[0].classList;
// select specify class 
val=document.links[0].classList[0];

val=document.images;

val=document.scripts;
val=document.scripts[2].getAttribute('src');

// not array
let scripts = document.scripts;
// make array
let scriptArr= Array.from(scripts);


// for each is array function
scriptArr.forEach(function(script){
    console.log(script);
});


console.log(val);


// SELECTOR for single element   bytagname    byid

let x = document.getElementById(`task-title`);

console.log(x);

// get any id or class from it

console.log(x.id);

// Change style (not recommend)

x.style.backgroundColor=`black`;
x.style.color=`white`;

// change content
console.log(x.textContent);
x.innerText=`My Tasks`;
// insert html
x.innerHTML=`<div>My Tasks123</div>`;


// document  query selector  only select the first one if there are more than 1 elements
console.log(document.querySelector(`#task-title`));
console.log(document.querySelector(`.card-title`));

document.querySelector('li').style.color='red';


// select last item
console.log(document.querySelector(`li:last-child`).style.color='purple');
console.log(document.querySelector(`li:nth-child(2)`).style.color='blue');

// even i write even but it select the single element only
console.log(document.querySelector(`li:nth-child(even)`).textContent='Hello Red');


// Mulotiple selector in array

let z =document.getElementsByClassName('collection-item');
console.log(z);
console.log(z[0]);

// select query with by class name filter
let y =document.querySelector('ul').getElementsByClassName('collection-item');
console.log(y);


// convert html collection to array
// Array.forom(lis);
y_arr=Array.from(y);
console.log(y_arr);


// document query selector all

const items= document.querySelectorAll(`li`);
console.log(items);

items.forEach(function(item, index){
    item.textContent=`${index}: Hello1`
});

console.log(items);

// odd and even loop
const liOdd = document.querySelectorAll('li:nth-child(odd');

liOdd.forEach(function(item, index){
    item.style.backgroundColor='grey';
});

