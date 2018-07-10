const calc1 = document.querySelector(".calc1-outerBox");
const calc2 = document.querySelector(".calc2-outerBox");
const display = document.querySelectorAll(".result");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".ops");
const clearContent = document.querySelectorAll(".clear");
const equalButton = document.querySelectorAll(".equal");
const negativeButton = document.querySelectorAll(".negative");

let shouldLog = true;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}

function test(e) {
  console.log(e.target);
}

calc1.addEventListener("click", e => test(e));
calc2.addEventListener("click", e => test(e));

// numberButtons.forEach(numButton =>
//   numButton.addEventListener("click", e => displayNum(e))
// );
// operationButtons.forEach(opsButton =>
//   opsButton.addEventListener("click", e => displayOps(e))
// );

// function flushContent() {
//   display.innerHTML = "";
//   number.firstNum = "";
//   number.secondNum = "";
//   operator = "";
// }

// function negativeSign(e, numberObj) {
//   let negativeNumber = operator === "" ? "firstNum" : "secondNum";
//   console.log(negativeNumber, e.target.innerHTML);
//   if (numberObj[negativeNumber] === "") {
//     console.log("reached here");
//     numberObj[negativeNumber] += "-";
//     display.innerHTML = "-";
//   }
// }

// function displayNum(e, numberObj) {
//   //console.log(e.target);
//   let num = e.target.innerHTML;
//   let numberClicked = operator === "" ? "firstNum" : "secondNum";
//   if (num === ".") {
//     numberObj[numberClicked] += numberObj[numberClicked].includes(".")
//       ? ""
//       : num;
//   } else {
//     numberObj[numberClicked] += num;
//   }
//   display.innerHTML = numberObj[numberClicked];
// }

// function displayOps(e) {
//   if (number.secondNum !== "") {
//     calculate();
//   }
//   operator = e.target.innerHTML;
// }

// function calculate() {
//   if (
//     number["firstNum"] !== "" &&
//     number["secondNum"] !== "" &&
//     number["secondNum"] !== "-"
//   ) {
//     let firstNumber = parseFloat(number["firstNum"]);
//     let secondNumber = parseFloat(number["secondNum"]);
//     let result;
//     console.log(typeof firstNumber);
//     console.log(typeof secondNumber);
//     //result = `${firstNumber}${operator}${secondNumber}`;
//     switch (operator) {
//       case "+":
//         result = firstNumber + secondNumber;
//         break;
//       case "-":
//         result = firstNumber - secondNumber;
//         break;
//       case "*":
//         result = firstNumber * secondNumber;
//         break;
//       case "/":
//         result = firstNumber / secondNumber;
//         break;
//     }
//     display.innerHTML = result;
//     number.firstNum = result.toString();
//     number.secondNum = "";
//     operator = "";
//   }
// }

// numberButtons.forEach(numButton =>
//   numButton.addEventListener("click", e => displayNum(e))
// );
// clearContent.addEventListener("click", flushContent);
// operationButtons.forEach(opsButton =>
//   opsButton.addEventListener("click", e => displayOps(e))
// );
// equalButton.addEventListener("click", e => calculate(e));
// negativeButton.addEventListener("click", e => negativeSign(e, number));
