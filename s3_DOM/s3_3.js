// event listener 

document.querySelector(".clear-tasks").addEventListener("click", function (e) {
  console.log("Hello Worl~~~");

  e.preventDefault();
});
// # in href can preventdefault

// do proper eventlistener

  document.querySelector(".clear-tasks")
  document.addEventListener("click", onClick);

// e = event target element => the one activate the function => get id ,class
function onClick(e) {
  let val;

  val = e.target;
  console.log("CLicked!!!");
  e.preventDefault();

  val = e.target;
  val = e.target.classList;

  console.log(val);

  val = e.type;

  // time stramp
  val = e.timeStamp;

  // get coordinate position
  val = e.clientY;

  // coord that relative to the element box (MOUSEX and MOUSEY)
  val = e.offsetY;

  console.log(val);
}

//  event type => like clicked, mouseover


