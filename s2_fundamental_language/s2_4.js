// object literal & date n times & comparison operators & switch
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@gmail.com",
  hobbies: ["hobbies", "music"],
  address: {
    city: "miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;
let val2;

val = person;
// get specific value
val = person.firstName;
val = person["firstName"];

val2 = person.address;
val2 = person.address["state"];
val2 = person.getBirthYear();

console.log(val);
console.log(val2);

const people = [
  { name: "john", age: 30 },
  { name: "Steve", age: 28 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// Date and times

let s1;
// today
const today = new Date();
// other date with different format
let setday = new Date("fe2-2-2022 12:12:12");
setday = new Date(" September 9 1999");
setday = new Date("9/9/1099");
setday.setFullYear(1909);
// setmonth it start from 0 to 11
setday.setMonth(3);

s1 = today;
s1 = today.getFullYear();

console.log(s1);
console.log(setday);
console.log();

// if condition 

const id=101;


// equal to
if(id===101){
    console.log('CORRECT');

}else{
    console.log('FALSE');
}

// if id is defined; another is else if(){}

if(id){
    console.log('CORRECT1');

}else{
    console.log('FALSE2');
}

// logical  operations
const name='Steve';
const age=14;

// AND operation
if(age>0 && age<12){
    console.log(`${name} is a child`);
} else if(age >13 && age <=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is a child`);
}

// OR operation

// ternary operator
console.log(id===101 ? 'Supercorrect' : 'incorrect');


// switch conditional; for many cases than using if else

const color='yellow';

switch(color){
    case 'yellow':
        console.log(`color is yellow`);
        break;
    case 'red':
        console.log(`color is red`);
        break;
    case 'blue':
        console.log(`color is blue`);
        break;
    default:
        console.log(`color is not yellow, red and blue`);
}

// switch(new Date().getDay()){

// }