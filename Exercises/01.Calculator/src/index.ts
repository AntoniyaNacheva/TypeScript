type CalcType = {
  [key: string]: string;
};

function calc(firstNum: number, operator: string, secondNum: number) {
  const calculator: CalcType = {
    "+": (firstNum + secondNum).toFixed(2),
    "-": (firstNum - secondNum).toFixed(2),
    "*": (firstNum * secondNum).toFixed(2),
    "/": (firstNum / secondNum).toFixed(2),
  };
  return calculator[operator];
}

console.log(calc(5, "+", 10));
console.log(calc(25.5, "-", 3));
console.log(calc(9, "/", 2));
console.log(calc(7, "*", 5));

// function calc(firstNum: number, operator: string, secondNum: number) {
//   switch (operator) {
//     case "+":
//       return (firstNum + secondNum).toFixed(2);
//     case "-":
//       return (firstNum - secondNum).toFixed(2);
//     case "*":
//       return (firstNum * secondNum).toFixed(2);
//     case "/":
//       return (firstNum / secondNum).toFixed(2);
//   }
// }

// console.log(calc(5, "+", 10));
// console.log(calc(25.5, "-", 3));
// console.log(calc(9, "/", 2));
// console.log(calc(7, "*", 5));
