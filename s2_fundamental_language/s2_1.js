//  variable type and conversion

console.log('hello');
console.log('there is some error');
console.log('hello123');

// 7. var let const


// letters, numbers, _, $
//cannot start with numbers

var FirstName='John';
console.log('FirstName');

//let and const

const name='John';
// name= 'Johnny';
console.log(name);


// 8. object we can change the name
const person={
    name:'Jonny',
    age:30
}

person.name = 'Sara';
person.age=32.5;
console.log(person);
// array , const we still can push something
const numbers =[1,2,3,4,5];
numbers.push(6);
console.log(numbers);

// PRIMITIVE TYPE
const hasKids= true;
// null = object it is a bug
const car= null;    
//  undefined is undefiend to variable ,const must have initator
let test;
// Symbol
const sym=Symbol();

console.log(typeof car);
console.log(typeof test);
console.log(sym);


// REFERENCES TYPE  -- all are object
// array
const hobbies=['movie','music'];

// object literal
const address={
    city:'boston',
    sate:'MA',
}

const today= new Date();

console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof today);


//9. TYPE CONVERSION

let val;

// Number to string
val= String(4+4);
// bool to string
val=String(true);
// array to string;
val=String([1,2,3,4,5]);

// to string
val=(5).toString();


let val_1=5;


console.log(val);
console.log(typeof val);
// length only works on string
console.log(val.length);

// tofixed to set decimal places
console.log(val_1.toFixed(2));

// convert other to number --> null=0, true =1, false=0 , 'hello', array= NaN(not a number)
// number can add directly
// if there is a string, then automatically other numbers change to string

// key in as float value
let val_2=parseFloat('100.30');
console.log(val_2);


//10. Math object

let val_3;
// floor= remove decimal, round, ceil= roundoff even less than 0.5
val_3=Math.PI;
val_3=Math.sqrt(24);
// random value from 1 to 20
val_3=Math.floor(Math.random()*20+1);

console.log(val_3);