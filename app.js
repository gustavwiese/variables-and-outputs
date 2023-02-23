"use strict";

let number = 0;

window.addEventListener("load", start);

function start() {
  console.log("App Ready");
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decreaseNumber);
}

function incrementNumber() {
  number = number + 1;
  displayNumber();
}
function decreaseNumber() {
  number = number - 1;
  displayNumber();
}

function displayNumber() {
  let message = "";
  if (number > 10) {
    message = "Tallet er større end 10";
    console.log("Tallet er større end 10");
  } else if (number == 10) {
    message = "Tallet er 10";
    console.log("Tallet er 10")
  } else {
    message = "Tallet er mindre end 10";
    console.log("Tallet er 10 eller mindre");
  }
  document.querySelector("#number").textContent = number;
  document.querySelector("#message").textContent = message;
}

console.log(number);

console.log(23+23);
