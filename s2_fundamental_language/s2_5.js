// function expression & for loop options & while loop & do while loop

// function declaraction
function greeting(name) {
  if (typeof name === "undefined") {
    return `Hello unknown`;
  } else {
    return `Hello ${name}`;
  }
}

console.log(greeting("john"));

// function epxression
// function square (...) equals to below
const square = function (x = 2) {
  return x * x;
};

console.log(square(3));

// immediately invoake function expression - IIFEs - declare and run at same time

// (function(){
//     console.log(`IIFEs Ran...`)
// })();

(function (name) {
  console.log(`${name} ran...`);
})("brad");

// property method - when function in an object then is called method

const todo = {
  add: function () {
    console.log(`Add todo...`);
  },
  edit: function (id) {
    console.log(`Editi todo ${id}`);
  },
};

todo.add();
todo.edit(22);

// loops for, while, do while

// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log(`2 is my favourite number`);
    continue;
  }
  if (i === 5) {
    break;
  }
  console.log(`Number ${i}`);
}

// While loop

let z = 0;

while (z < 10) {
  console.log(`z is equal to ${z}`);
  z++;
}

//  do while

let w=0;
do {
  console.log(`Number of z is ${w}`);
  w++;
} while (w < 10);


// loop through array
const cars= ['ford','Chevy','Honda','Myvi',`hello`];

// for (let x=0; x <cars.length;x++){
//     console.log(cars[x]);
// }

// second for loop array; for each

cars.forEach(element => {
    console.log(element);
    
});
//  three option can be taken from foreach
cars.forEach(function(car,index,array){
    console.log(`${index} : ${car}`);
    console.log(array); 
    
});

// third  map to return array
const user=[
    {id:1, name:'john'},
    {id:2, name:'cene'},
    {id:3, name:'Dione'}
];

const ids= user.map(function(userid){
    return userid.id
});

console.log(ids);

// fourth the simple for in loop

for( let b in cars){
    console.log(`${b} : ${cars[b]}`);
}

// fifth for of loop

//  for of