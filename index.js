const calc1 = document.querySelector(".calc1-outerBox");
const calc2 = document.querySelector(".calc2-outerBox");

let shouldLog = false;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}

function createCalculator(calcDivId) {
  const calcNumbers = document.querySelectorAll(`.${calcDivId} .number`);
  const calcResult = document.querySelector(`.${calcDivId} .result`);
  const calcops = document.querySelectorAll(`.${calcDivId} .ops`);
  const calcClearButton = document.querySelector(`.${calcDivId} .clear`);
  const calcEqual = document.querySelector(`.${calcDivId} .equal`);
  const calcNegative = document.querySelector(`.${calcDivId} .negative`);

  const calculator = {
    operator: "",
    firstNum: "",
    secondNum: "",
    result: "",
    recordOps: function(display, eve) {
      if (calculator["firstNum"] === "-") return;
      else if (calculator.secondNum !== "") {
        calculator.calculate(display);
      }
      calculator.operator = eve.target.innerHTML;
    },
    displayNum: function(display, eve) {
      //calculator.result ? calculator.clearDisplay(display) : "";
      if (calculator.result) {
        calculator.clearDisplay(display);
        calculator.result = "";
      }
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
      display.innerHTML = calculator[numberClicked];
    },
    clearDisplay: function(display) {
      calculator.firstNum = "";
      calculator.secondNum = "";
      calculator.operator = "";
      display.innerHTML = "";
    },
    negSign: function(display, eve) {
      let negativeNumber =
        calculator["operator"] === "" ? "firstNum" : "secondNum";
      if (calculator[negativeNumber] === "") {
        calculator[negativeNumber] += "-";
        display.innerHTML = "-";
      }
    },
    calculate: function(display) {
      if (
        calculator.firstNum !== "" &&
        calculator.operator !== "" &&
        calculator.secondNum !== "" &&
        calculator.secondNum !== "-"
      ) {
        let firstNumber = parseFloat(calculator.firstNum);
        let secondNumber = parseFloat(calculator.secondNum);
        //let result = "";
        // result = (`${firstNumber} ${operator} ${secondNumber}`);
        switch (calculator.operator) {
          case "+":
            calculator.result = firstNumber + secondNumber;
            break;
          case "-":
            calculator.result = firstNumber - secondNumber;
            break;
          case "*":
            calculator.result = firstNumber * secondNumber;
            break;
          case "/":
            calculator.result = firstNumber / secondNumber;
            break;
        }
        display.innerHTML = calculator.result;
        calculator.firstNum = calculator.result.toString();
        calculator.secondNum = "";
        calculator.operator = "";
      }
    }
  };

  calcNumbers.forEach(e =>
    e.addEventListener("click", eve => calculator.displayNum(calcResult, eve))
  );
  calcClearButton.addEventListener("click", eve =>
    calculator.clearDisplay(calcResult)
  );

  calcops.forEach(e =>
    e.addEventListener("click", eve => calculator.recordOps(calcResult, eve))
  );
  calcEqual.addEventListener("click", eve =>
    calculator.calculate(calcResult, eve)
  );
  calcNegative.addEventListener("click", eve =>
    calculator.negSign(calcResult, eve)
  );
  return calculator;
}

const calculator1st = createCalculator("calc1-outerBox");
const calculator2nd = createCalculator("calc2-outerBox");
