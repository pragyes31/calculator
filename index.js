const display = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".ops");
const clearContent = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const negativeButton = document.querySelector(".negative");
let operator = "";
let number = {
  firstNum: "",
  secondNum: ""
};
console.log(operator);
let shouldLog = true;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}

function flushContent() {
  display.innerHTML = "";
  number.firstNum = "";
  number.secondNum = "";
  operator = "";
}

function negativeSign(e, numberObj) {
  let negativeNumber = operator === "" ? "firstNum" : "secondNum";
  console.log(negativeNumber, e.target.innerHTML);
  if (numberObj[negativeNumber] === "") {
    console.log("reached here");
    numberObj[negativeNumber] += "-";
    display.innerHTML = "-";
  }
}

function displayNum(e, numberObj) {
  //console.log(e.target);
  let num = e.target.innerHTML;
  let numberClicked = operator === "" ? "firstNum" : "secondNum";
  if (num === ".") {
    numberObj[numberClicked] += numberObj[numberClicked].includes(".")
      ? ""
      : num;
  } else {
    numberObj[numberClicked] += num;
  }

  //console.log(number.firstNum + "asd");
  display.innerHTML = numberObj[numberClicked];
}

function displayOps(e) {
  if (number.secondNum !== "") {
    calculate();
  }
  operator = e.target.innerHTML;
}

function calculate() {
  if (
    number["firstNum"] !== "" &&
    number["secondNum"] !== "" &&
    number["secondNum"] !== "-"
  ) {
    let firstNumber = parseFloat(number["firstNum"]);
    let secondNumber = parseFloat(number["secondNum"]);
    let result;
    console.log(typeof firstNumber);
    console.log(typeof secondNumber);
    //result = `${firstNumber}${operator}${secondNumber}`;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }
    display.innerHTML = result;
    number.firstNum = result.toString();
    number.secondNum = "";
    operator = "";
  }
}

numberButtons.forEach(numButton =>
  numButton.addEventListener("click", e => displayNum(e, number))
);
clearContent.addEventListener("click", flushContent);
operationButtons.forEach(opsButton =>
  opsButton.addEventListener("click", e => displayOps(e))
);
equalButton.addEventListener("click", e => calculate(e));
negativeButton.addEventListener("click", e => negativeSign(e, number));

// let firstNum = "";
// let secondNum = "";
// let operator = "";
// let result = "";

// function flushContent() {
//   displayResult.innerHTML = "";
//   firstNum = "";
//   secondNum = "";
//   operator = "";
// }

// function negativeSign() {
//   if (firstNum !== "" && secondNum !== "") return; // no - sign in the middle or
//   if (firstNum === "") {
//     firstNum += "-";
//     displayResult.innerHTML = firstNum;
//   } else if (firstNum !== "" && secondNum === "") {
//     secondNum += "-";
//     displayResult.innerHTML = secondNum;
//   }
// }

// // function checkDecimal(number) {
// //   if (e.target.innerHTML === "." && number.indexOf(".") !== -1) {
// //     return; // this if statement checks for 2nd click of decimal button
// //   }
// //   number += e.target.innerHTML;
// //   displayResult.innerHTML += e.target.innerHTML;
// // }
// // function displayNum(e) {

// //   if (operator === "") {
// //     checkDecimal(firstNum);
// // }
// // else {
// //   checkDecimal(secondNum);
// // }
// // }
// function displayNum(e) {
//   if (operator === "") {
//     // 'if' to check the user does not input 2 decimal in a row for the first Number
//     if (e.target.innerHTML === "." && firstNum.includes(".")) {
//       return;
//     } else if (result !== "") {
//       firstNum = "";
//       result = "";
//     }
//     displayResult.innerHTML = "";
//     console.log(displayResult, firstNum);
//     firstNum += e.target.innerHTML;
//     displayResult.innerHTML += firstNum;
//   } else {
//     // 'if' to check the user does not input 2 decimal in a row for the second Number
//     if (e.target.innerHTML === "." && secondNum.includes(".")) {
//       return;
//     } else if (secondNum.length < 1) {
//       displayResult.innerHTML = "";
//     }
//     secondNum += e.target.innerHTML;
//     displayResult.innerHTML += e.target.innerHTML;
//   }
// }
// function displayOps(e) {
//   if (firstNum === "") return;
//   else if (secondNum !== "") {
//     // for chaining of equation eg: 3*6+55-4
//     calculate();
//     console.log(firstNum);
//     console.log(operator);
//     displayOps(e);
//     return;
//   }
//   operator = e.target.innerHTML;
// }

// function calculate() {
//   if (firstNum !== "" && operator !== "" && secondNum !== "") {
//     let firstNumber = parseFloat(firstNum);
//     let secondNumber = parseFloat(secondNum);
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
//     displayResult.innerHTML = result;
//     firstNum = result.toString();
//     secondNum = "";
//     operator = "";
//     console.log(operator + "calc");
//   }
// }

// operationButtons.forEach(opsButton =>
//   opsButton.addEventListener("click", e => displayOps(e))
// );
// clearContent.addEventListener("click", flushContent);
// equalButton.addEventListener("click", e => calculate(e));
// negativeButton.addEventListener("click", e => negativeSign(e));
