// symbol ES6   (it is unique for everydata)

// create a symbol
// it is primitive data value
const sym1 = Symbol();

const sym2 = Symbol('sym2');

console.log(sym1);
console.log(typeof sym2);


console.log(Symbol('123') === Symbol('123'));   //false because every symbol is unique
console.log(`Hello ${sym2.toString()}`);


// Unique object key

const key1 =Symbol();
const key2 = Symbol('sym2');

const myObject = {};

// add key in myObject
// not to use myObject.key1 , it is key1 property, not the real variable of key1

// actual variable
myObject[key1] = 'Prop';
myObject[key2] = 'Prop2';

// property of myobject
myObject.key3 = 'Prop3';
myObject.key4 = 'Prop4';



console.log(myObject[key1]);
console.log(myObject[key2]);

// it is not enumerable in for .... in

// only show key3 and key4
for (let index in myObject){
    console.log(`${index} : ${myObject[index]}`);
}
    

// symbol are ignored by JSON.stringify

// normal object
console.log(JSON.stringify({key : 'prop'}));

// it return in empty object
console.log(JSON.stringify({[Symbol('sym1')] : 'prop'}));
