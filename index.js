const calc1Numbers = document.querySelectorAll(".calc1-outerBox .number");
const calc2Numbers = document.querySelectorAll(".calc2-outerBox .number");
const displayNum1 = document.querySelector(".calc1-outerBox .result");
const displayNum2 = document.querySelector(".calc2-outerBox .result");
const calc1ops = document.querySelectorAll(".calc1-outerBox .ops");
const calc2ops = document.querySelectorAll(".calc2-outerBox .ops");

function displayNum(display, eve) {
  let firstNum = "";
  let secondNum = "";

  display.innerHTML += eve.target.innerHTML;
}

function recordOps(eve) {
  let operator = "";
  operator = eve.target.innerHTML;
  displayNum;
  console.log(operator);
}

calc1Numbers.forEach(e =>
  e.addEventListener("click", eve => displayNum(displayNum1, eve))
);
calc2Numbers.forEach(e =>
  e.addEventListener("click", eve => displayNum(displayNum2, eve))
);
calc1ops.forEach(e => e.addEventListener("click", eve => recordOps(eve)));
calc2ops.forEach(e => e.addEventListener("click", eve => recordOps(eve)));

let shouldLog = true;
function log(...args) {
  if (shouldLog) {
    console.log(...args);
  }
}
