// gamr function

// guess a number
// players got few Channces
// notify remaining chance, correct answer if loose
// let player click to play again

// Game values
let min = 1,
  max = 10,
  winningnumber = getRandomNum(min,max),
  guessLeft = 3;

// Ul var
const UIgame = document.getElementById("#game"),
  UIminNum = document.querySelector(".min-num"),
  UImaxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  UImsg = document.querySelector(".message");

// assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// listen for play again
// mousedown- when u released ur mouse then trigger
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess input

// submit is used for form only; so gonna use click
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
    // check if won
  } else if (guess === winningnumber) {
    // game over- win

    gameOver(true, `${winningnumber} is correct! YOU WIN`);
  } else {
    // wrong number
    guessLeft -= 1;
    if (guessLeft === 0) {
      // gameover- lose
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningnumber}`
      );
    } else {
      // deduct chance
      guessInput.style.borderColor = "red";
      setMessage(`${guess} is not correct, ${guessLeft} chane is left`, "red");

      // clear guess input

      guessInput.value = "";
    }
  }
});

// function gameover

function gameOver(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red");
  // disabled input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;

  // set Message
  setMessage(msg, color);

  // play again??
  guessBtn.value = "Play again";
  guessBtn.className = "play-again";
}
// set message
function setMessage(message, color) {
  UImsg.style.color = color;
  UImsg.textContent = message;
}

// getting winning number
function getRandomNum(min,max) {
    // if times 10 only get value from 0 to 9; so gonna get between max and min; plus min to get 1 to 10
    return Math.floor(Math.random()*(max-min +1)+ min);
}
