//  constructor and this keyword & built in constructor

// object literal

// const brad={
//     name:'Brad',
//     age:30,
    
// }

// console.log(brad);

// one object = {, }  | many objects = {; }


// constructor method for multiple object in ES5 = must head capital 
function Person(name, dob){

    // take arguement as name
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge= function (){
        // bcs date.now is in value ,so this.birthday gonna change to value by get time
          const diff = Date.now()- this.birthday.getTime();
          const ageDate= new Date(diff);
        //   convert to full year in universal time, 1970 is the first year of UTC
          return Math.abs(ageDate.getUTCFullYear() -1970);

    }

    console.log(this);
    console.log(this.calculateAge());

}

// this in global point to window; this in function point to function

const brad= new Person('Brad', '1981-5-10');
const john= new Person('John', '5-4-1990');


// Built in constructor
// primitive value
const name1 ='Jeff';

// string object
const name2= new String('Jeff');


// name2.foo='bar';

console.log(name2);
// name2 is not string type, but object , so u can use == instead of ===
if (name2 ==='Jeff') {
    console.log('Yes');
} else{
    console.log('No');
}

// Number
const num1 = 5;
const num2= new Number(5);

// Boolean

const boo1 = true;
const boo2= new Boolean(true);


// these expression are the same; primitiva value are different as above 

// function

const getSum1 = function(x,y){
    return x+y;
}

// very wierd
const getSum2= new Function('x','y', 'return 1+1');
 

console.log(getSum1(1,1));

// object
const johny1 = {
    name:'Johny'
};

const johny2 = new Object({name:'Johnny2'});


console.log(johny1);



// array also can,quite normal

const arr= new Array(1,2,3,4,5);

// regular expression
const re1=/\w+/;



// trial on liaoxuefeng website ; nested de function; this only point the parent one; not parent parent one; but can fixed with arrow function because it make into same line with parent   
const b= {
    birth: new Date('1980-5-5'),
    name:'Brad',
    age:30,
    calculateAge: function(){
        return Date.now() - this.birth.getTime();
    },

}

console.log(b.calculateAge());

