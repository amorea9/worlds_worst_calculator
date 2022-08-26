"use strict";

window.addEventListener("load", init);

const resultList = document.querySelector("#results");
const clearButton = document.querySelector("#clear");
const calculateButton = document.querySelector("#calculate");
let resultRounded;
let result;

function init() {
  calculateButton.addEventListener("click", calculating);
  clearButton.addEventListener("click", clearFields);
}
function clearFields() {
  //removes values
  document.querySelector("#firstnumber").value = "";
  document.querySelector("#secondnumber").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("decimals").value = "";
  document.querySelector("#doround").checked = false;
}
function calculating() {
  //reading operator and input strings
  const operator = document.getElementById("operator").value;
  const firstString = document.querySelector("#firstnumber").value;
  const secondString = document.querySelector("#secondnumber").value;
  //convert strings into numbers
  const firstNumber = Number.parseFloat(firstString);
  const secondNumber = Number.parseFloat(secondString);
  if (operator === "add") {
    result = firstNumber + secondNumber;
  }
  if (operator === "sub") {
    result = firstNumber - secondNumber;
  }
  if (operator === "mul") {
    result = firstNumber * secondNumber;
  }
  if (operator === "div") {
    result = firstNumber / secondNumber;
  }
  //giving the first number, the latest result number
  document.getElementById("firstnumber").value = result;

  //reading if the box is checked
  const rounding = document.querySelector("#doround").checked;
  //rounding
  if (rounding) {
    const decimals = document.getElementById("decimals").value;
    console.log(decimals);
    resultRounded = result.toFixed(decimals);
    //first number also gets rounded
    document.getElementById("firstnumber").value = resultRounded;
    appendRounded();
  } else {
    appendNumber();
  }
}
//appending
function appendNumber() {
  let li = document.createElement("li");
  li.textContent = result;
  resultList.append(li);
  resultList.scrollTo(0, 1000000);
}
function appendRounded() {
  let li = document.createElement("li");
  li.textContent = resultRounded;
  resultList.append(li);
  resultList.scrollTo(0, 1000000);
}
