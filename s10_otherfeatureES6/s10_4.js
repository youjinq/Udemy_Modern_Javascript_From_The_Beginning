// destructing

// desc =>what name equal to what value....


// array destructing assignment
let a,b;

// a,b =100,200


// normal array pattern
[a,b] = [100,200];


console.log(a);
console.log( typeof a);


// rest pattern =>return array
[a,b, ...rest] = [100,200,300,400,500];

console.log(rest);
console.log(typeof rest);

// object destructing assignment
// first method
const numbers = {a1:100,
    b2:200,
    c3:300,
};

// only const/let at front can use {...} = numbers; without that cannot, the assigned must be new defined and same name with object
let {a1,b2,c3} = numbers;

console.log(a1,b2,c3);


// rest destructing

// second method (seldom use)
({a,b, ...rest} ={a:100, b:200, c:300, d:400, e:600});

console.log(a,b,rest);


// Array destructing
// normal array

const people=['Jon', 'Beth', 'Milk'];
// assign name to array
const [person1, person2, person3] = people


console.log(person1, person2, person3);


// parse array returned from function
function getPeople(){

    return ['Jon', 'Beth', 'Milk'];
}
// assign variable
let persn1, persn2, persn3;

 [persn1, persn2, persn3] = people


console.log(persn1, persn2, persn3);


// object destructuring ***

const person = {
    name: 'John',
    age: 30,
    city:"London",
    gender:'Male',
    sayHello:function(){
        console.log('Hello');
    }
}

// old ES5

//  const name= person.name
//         age= person.age
//         city=person.city;

// NEW ES6 destructing

const { name, age, city, sayHello} = person;

console.log(name, age, city,);

sayHello();