const calc1Numbers = document.querySelectorAll(".calc1-outerBox .number");
const calc2Numbers = document.querySelectorAll(".calc2-outerBox .number");
const calc1Result = document.querySelector(".calc1-outerBox .result");
const calc2Result = document.querySelector(".calc2-outerBox .result");
const calc1ops = document.querySelectorAll(".calc1-outerBox .ops");
const calc2ops = document.querySelectorAll(".calc2-outerBox .ops");
const calc1ClearButton = document.querySelector(".calc1-outerBox .clear");
const calc2ClearButton = document.querySelector(".calc2-outerBox .clear");
const calc1Equal = document.querySelector(".calc1-outerBox .equal");
const calc2Equal = document.querySelector(".calc2-outerBox .equal");

let shouldLog = true;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}

const calculator = {
  operator: "",
  firstNum: "",
  secondNum: "",
  recordOps: function(display, eve) {
    if (calculator.secondNum !== "") {
      calculator.calculate(display);
    }
    calculator.operator = eve.target.innerHTML;
    console.log(calculator.operator);
  },
  displayNum: function(display, eve) {
    let num = eve.target.innerHTML;
    let numberClicked =
      calculator["operator"] === "" ? "firstNum" : "secondNum";
    if (num === ".") {
      calculator[numberClicked] += calculator[numberClicked].includes(".")
        ? ""
        : num;
    } else {
      calculator[numberClicked] += eve.target.innerHTML;
    }
    console.log(calculator[numberClicked]);
    console.log(numberClicked, calculator.firstNum);
    //console.log(calculator.operator, calculator.firstNum);
    display.innerHTML = calculator[numberClicked];
  },
  clearDisplay: function(display) {
    calculator.firstNum = "";
    calculator.secondNum = "";
    calculator.operator = "";
    display.innerHTML = "";
  },
  calculate: function(display) {
    console.log(
      "entered calculate function",
      calculator.operator,
      calculator.secondNum
    );
    console.log(calculator.firstNum);
    if (
      calculator.firstNum !== "" &&
      calculator.operator !== "" &&
      calculator.secondNum !== ""
    ) {
      console.log("passed");
      let firstNumber = parseFloat(calculator.firstNum);
      let secondNumber = parseFloat(calculator.secondNum);
      console.log(firstNumber, secondNumber);
      let result;
      // result = (`${firstNumber} ${operator} ${secondNumber}`);
      switch (calculator.operator) {
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
      console.log(result);
      display.innerHTML = result;
      calculator.firstNum = result.toString();
      console.log(calculator.firstNum, calculator.secondNum);
      calculator.secondNum = "";
      console.log(calculator.firstNum, calculator.secondNum);
      calculator.operator = "";
    }
  }
};

calc1Numbers.forEach(e =>
  e.addEventListener("click", eve => calculator.displayNum(calc1Result, eve))
);
calc2Numbers.forEach(e =>
  e.addEventListener("click", eve => calculator.displayNum(calc2Result, eve))
);
calc1ClearButton.addEventListener("click", eve =>
  calculator.clearDisplay(calc1Result)
);
calc2ClearButton.addEventListener("click", eve =>
  calculator.clearDisplay(calc2Result)
);
calc1ops.forEach(e =>
  e.addEventListener("click", eve => calculator.recordOps(calc1Result, eve))
);
calc2ops.forEach(e =>
  e.addEventListener("click", eve => calculator.recordOps(calc2Result, eve))
);
calc1Equal.addEventListener("click", eve =>
  calculator.calculate(calc1Result, eve)
);
calc2Equal.addEventListener("click", eve =>
  calculator.calculate(calc2Result, eve)
);
