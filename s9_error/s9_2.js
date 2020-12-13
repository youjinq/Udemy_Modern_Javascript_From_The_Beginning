// regular expression- search the pattern of character

let re;

// i-case insensitive
// g- gloval search

re=/hello/i;

// console.log(re);
// console.log(re.source);


// exec()- return result in an array or null
// match the sring and return an array 
const result = re.exec(' brad hello world');
// console.log(result);

// console.log(result.input);   


// test() - return true or false

// const truth = re.test('Hello');
// console.log(truth);

// match() - return result array or null
// should fill in with full character of word
const string= 'hello';
const results = string.match(re);
console.log(results);


// search() - return index of first match if not found retunr-1

const str= 'Hello There';

const resut= str.search(re);
console.log(resut);

// replace() - find re and replace with other word
const x = 'hello there';
const newstr = x.replace(re,'hi');
console.log(newstr);