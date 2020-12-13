// string manipulation with its method; template string in es6

const name='LIM';
const lastname='Eugene';

// Concatenation
let val;

val= name +" "+ lastname;

// concat()
val=name.concat(' ', lastname);

// change case
val= val.toLowerCase();


// indexof  search by word
// val = val.indexOf('m');

// search by index
val2=val.charAt('1');

// substring  ,   slice
val= lastname.substring(0,3);
val=lastname.slice(-3);

// split  => split words into arrays  ; replace

// includes=> include the world???

// val=lastname.includes('eug')

console.log(val);


// template literals

const name1= 'John';
const age1= 30.1;
const job= 'Web developer';
const city= 'Miami';

// without template strings (es5)
let html;

html='<ul><li>Name: '+ name1 + '</li></ul>    '
// pretiffy format

html='<ul>'+
    '<li>Name:' + name1 + '</li>'+
    '<li>Age:' + age1 + '</li>'+
    '</ul>'

// with tempalte strings (es6)

function hello(){
    return 'hello';
}


html=`<ul>
    <li>Name: ${name1}</li>
    <li>Age: ${age1} </li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age1>30 ? 'Over 30' : 'under 30'}</li>

</ul>`


document.body.innerHTML=html;