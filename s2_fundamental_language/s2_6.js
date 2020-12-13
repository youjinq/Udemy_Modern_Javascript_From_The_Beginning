// Window methods /object/ properties

// Alert
// alert(`hello world`);

// Prompt => take input

// const input=prompt();
// alert(input);

// Confirm => double confirm to prevent accident occurence
// if(confirm(`Are you sure?`)){
//     console.log(`YES`);
// } else{
//     console.log(`No`);
// }

let val;
// Outer height and width => from top to bottom
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width => like outer but dun not include console height

// scroball position
val = window.scrollY;

// location object

val = window.location;

// Redirect
// window.location.href="https://www.google.com/";

// Reload
// window.location.reload();

// History object -1 to backward, 1 forward
// window.history.go(1);
// val = window.history.length;

// navigator object
val = window.navigator;
val = window.navigator.platform;

console.log(val);

// global scope?? block scope??

var a = 1;
let b = 2;
const c = 3;


//  function scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`Function scope `, a, b, c);
}

test();

// block scope - var affect global scope  = other  than function scope all are block

// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Block scope `, a, b, c);

// }


console.log(`Global scope `, a, b, c);