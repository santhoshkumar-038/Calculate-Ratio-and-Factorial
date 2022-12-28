const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumber = require("../ratio/index.js");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfTwoNumber(a, b);
  const factorial = factorialOfNumber(c);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
