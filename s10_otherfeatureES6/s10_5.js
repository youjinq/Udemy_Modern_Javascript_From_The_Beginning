//Map & sets


//  maps-object structure- key value pairs - can use any type as key and value
// get and set function

const map1 = new Map();

// set keys

const key1 = "some string",
  key2 = "",
  key3 = function () {};

//   set map values by key


map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3,'value of key3');


// get values by key

console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// count values

console.log(map1.size);

console.log(map1);
// iterating maps

// loop using for ... of to get key and value

// for (const [key,value] of map1) {
//     console.log(`${key} : ${value}`);
// };

// foreach cannot show the blank object but for of can
// map1.forEach( (key, index) => {

//     console.log(`${index} : ${key}`);

    
// });

// iterate key only - value also can
for (const key of map1) {
    console.log(key);
};



// convert to array

// create an array of the key value pairs - like working with html collection

const keyValArr = Array.from(map1);
console.log(keyValArr);


// create an array of the key value pairs - like working with html collection

const keyArr = Array.from(map1.keys());
console.log(keyArr);



const ValArr = Array.from(map1.values());
console.log(ValArr);


// sets - store  unique values of any type - cannot repeat the values

const set1 = new Set();

// Add value to set

set1.add(100);

set1.add('a string') ;

set1.add({name: 'John'});
set1.add(true);


// another format
const set2 = new Set([1, true, 'string']);


console.log(set1);

console.log(set2);

// get count

console.log(set1.size);

// check for values

console.log(set1.has(100));
console.log(set1.has(50+50));

// it is reference object in different location of storage, so false because it is not primitive value
console.log(set1.has({name: 'John'}));

// delete from set

set1.delete(100);

console.log(set1);



// iterating through set

// for...of
for (const item of set1) {
    console.log(item);
    
}

// it is sigle value not pari values, so set1.values, set1.key and whatever return values

set1.forEach(element => {
    console.log(element);
});

// convert set to array

const setArr = Array.from(set1);
console.log(setArr);