const calc1Numbers = document.querySelectorAll(".calc1-outerBox .number");
const calc2Numbers = document.querySelectorAll(".calc2-outerBox .number");
const calc1Result = document.querySelector(".calc1-outerBox .result");
const calc2Result = document.querySelector(".calc2-outerBox .result");
const calc1ops = document.querySelectorAll(".calc1-outerBox .ops");
const calc2ops = document.querySelectorAll(".calc2-outerBox .ops");
const calc1ClearButton = document.querySelector(".calc1-outerBox .clear");
const calc2ClearButton = document.querySelector(".calc2-outerBox .clear");
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
  recordOps: function(eve) {
    operator = eve.target.innerHTML;
    console.log(operator);
  },
  displayNum: function(display, eve) {
    let numberClicked =
      calculator.operator === "" ? calculator.firstNum : calculator.secondNum;
    numberClicked += eve.target.innerHTML;
    console.log(numberClicked);
    display.innerHTML += numberClicked;
  },
  clearDisplay: function(display) {
    calculator.firstNum = "";
    calculator.secondNum = "";
    calculator.operator = "";
    display.innerHTML = "";
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
