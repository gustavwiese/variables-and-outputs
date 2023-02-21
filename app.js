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
  document.querySelector("#number").textContent = number;
  let message = `Tallet er nu ${number}`;
  document.querySelector("#message").textContent = message;
}
