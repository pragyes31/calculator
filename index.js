const calc1 = document.querySelector(".calc1-outerBox");
const calc2 = document.querySelector(".calc2-outerBox");

let shouldLog = true;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}

function createCalculator(calcDivId) {
  const calcNumbers = document.querySelectorAll("." + calcDivId + " .number");
  const calcResult = document.querySelector("." + calcDivId + " .result");
  const calcops = document.querySelectorAll("." + calcDivId + " .ops");
  const calcClearButton = document.querySelector("." + calcDivId + " .clear");
  const calcEqual = document.querySelector("." + calcDivId + " .equal");
  const calcNegative = document.querySelector("." + calcDivId + " .negative");

  const calculator = {
    operator: "",
    firstNum: "",
    secondNum: "",
    recordOps: function(display, eve) {
      if (calculator["firstNum"] === "-") return;
      // firstNum should atleast have one number. it can not be just '-'. NaN
      else if (calculator.secondNum !== "") {
        calculator.calculate(display);
      }
      calculator.operator = eve.target.innerHTML;
      console.log(calculator.operator);
    },
    displayNum: function(display, eve) {
      console.log("entered displayNum");
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
      console.log(calculator.operator, calculator.firstNum);
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
        console.log("reached here");
        calculator[negativeNumber] += "-";
        display.innerHTML = "-";
      }
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
        calculator.secondNum !== "" &&
        calculator.secondNum !== "-"
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
        display.innerHTML = result;
        calculator.firstNum = result.toString();
        console.log(calculator.firstNum, calculator.secondNum);
        calculator.secondNum = "";
        console.log(calculator.firstNum, calculator.secondNum);
        calculator.operator = "";
      }
    }
  };
  return calculator;

  calcNumbers.forEach(e =>
    e.addEventListener("click", eve => calculator.displayNum(calcResult, eve))
  );
}

const calculator1st = createCalculator("calc1-outerBox");
const calculator2nd = createCalculator("calc1-outerBox");

// calc1Numbers.forEach(e =>
//   e.addEventListener("click", eve => calculator1st.displayNum(calc1Result, eve))
// );
// calc2Numbers.forEach(e =>
//   e.addEventListener("click", eve => calculator2nd.displayNum(calc2Result, eve))
// );
// calc1ClearButton.addEventListener("click", eve =>
//   calculator1st.clearDisplay(calc1Result)
// );
// calc2ClearButton.addEventListener("click", eve =>
//   calculator2nd.clearDisplay(calc2Result)
// );
// calc1ops.forEach(e =>
//   e.addEventListener("click", eve => calculator1st.recordOps(calc1Result, eve))
// );
// calc2ops.forEach(e =>
//   e.addEventListener("click", eve => calculator2nd.recordOps(calc2Result, eve))
// );
// calc1Equal.addEventListener("click", eve =>
//   calculator1st.calculate(calc1Result, eve)
// );
// calc2Equal.addEventListener("click", eve =>
//   calculator2nd.calculate(calc2Result, eve)
// );
// calc1Negative.addEventListener("click", eve =>
//   calculator1st.negSign(calc1Result, eve)
// );
// calc2Negative.addEventListener("click", eve =>
//   calculator2nd.negSign(calc2Result, eve)
// );
