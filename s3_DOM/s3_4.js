//  mouse event & keyboard event & event delegation***

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// click

// clearBtn.addEventListener('click',runEvent);

// double click

// clearBtn.addEventListener('dblclick',runEvent);

// // mouse down -hold when click

// clearBtn.addEventListener('mousedown',runEvent);

//mouse up - hold and released only run
// clearBtn.addEventListener('mouseup',runEvent);

// mouseenter=> cursor drag into card automatically trigger
// card.addEventListener('mouseenter',runEvent);

// // mouseleave
// card.addEventListener('mouseleave',runEvent);

// mouseover andd mouseout  => like mouseenter adn mouseleave, different is it work on main element when u switch to other and back

// mousemove => interactiv and fast to count in main element
// card.addEventListener('mousemove',runEvent);

// Event handler
function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  // set heading to cursor
  heading.textContent = `MouseX : ${e.offsetX} MouseY: ${e.offsetY}`;
  // move to change color
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40)`;
}

// Sample
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// // clearBtn.addEventListener('click', runEvent);
// // Doubleclick
// // clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown
// // clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup
// // clearBtn.addEventListener('mouseup', runEvent);
// // Mouseenter
// // card.addEventListener('mouseenter', runEvent);
// // Mouseleave
// // card.addEventListener('mouseleave', runEvent);
// // Mouseover
// // card.addEventListener('mouseover', runEvent);
// // Mouseout
// // card.addEventListener('mouseout', runEvent);
// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

// Keyboard event;

const form = document.querySelector("form");
const takeInput = document.getElementById("task");
// h5 at above
const select = document.querySelector("select");

// clear input once they submit
takeInput.value = "";

// submit
// form.addEventListener('submit',runEventlor);

// keydown-
// takeInput.addEventListener('keydown',runEventlor);
//
// keyup - release then run
// takeInput.addEventListener('keyup',runEventlor);
//
// keypress
// takeInput.addEventListener('keypress',runEventlor);
//
// Focus=> click the input place ; opposite is blur
takeInput.addEventListener("focus", runEventlor);
// Cut=> when u cut then trigger ; opposite is paste
takeInput.addEventListener("cut", runEventlor);
// input- anything u do within input
takeInput.addEventListener("input", runEventlor);
// change event => when something change in event
select.addEventListener("change", runEventlor);

function runEventlor(e) {
  console.log(`Event Type: ${e.type}`);

  // target value that change promptly
  console.log(e.target.value);

  // heading.innerText=e.target.value;

  // get input value
  // console.log(takeInput.value);
  // e.preventDefault();
}

// Event Bubbling =>upside class also being trigger when click card-title

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log(`card title`);
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log(`card content`);
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log(`card`);
// });

// document.querySelector('.col').addEventListener('click',function(){
//     console.log(`col`);
// });

// Event delegation

const deleteItem = document.querySelector(".delete-item");

deleteItem.addEventListener("click", function () {
  console.log("delete item");
});


// involve the whole body content ***
document.body.addEventListener("click", del);

function del(e) {
  console.log(e.target);
  //   if (e.target.className === "fa fa-remove") {
  //     console.log("delete item");
  //   }

  //   if wanna use parent de class name, it should include all => better to use classlist
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("delete item");
  //   }

  // classlist contain??
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");

    // remove the whole class
    e.target.parentElement.parentElement.remove();
  }
}
