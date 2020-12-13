// Arrays and array methods

// create array
const numbers = [1,2,3,4,5];

const numbers2 = new Array(11,22,33,44,55);

// array accept all type

const numbers3= ['Apple','Banana',25,true,undefined,null];

console.log(numbers3);

let val;

// get array length
val=numbers.length;
// check if it is array
val=Array.isArray(numbers2);
// get single value
val= numbers3[1];
// insert into array , array in const can modify
numbers[1]='it is changed';
// find index of value
val = numbers2.indexOf(22);

// Mutating arrays
// add on to end
numbers.push(250);
// add on to front
numbers.unshift(125);
// take off from end
numbers.pop();
// take off from front
numbers.shift();
// Splice values = remove value from certain place=> splice(start point, numbers of element) =>can add element too
numbers.splice(2,1)
// reverse
numbers.reverse();

// concatenate array
val=numbers.concat(numbers2);  

// Sorting array => numbers, character ; however it compare the fist value only
val.sort()

// use the compare function
val.sort((x,y)=>x-y);

// reverse sort
val.sort((x,y)=>y-x);

// find
let val2;

function under5(num){
    return num<3;
}

// find the first one with the function
val2=numbers.find(under5);


// join
val2 = numbers.join('-');

console.log(numbers);
console.log(val);
console.log(val2);




