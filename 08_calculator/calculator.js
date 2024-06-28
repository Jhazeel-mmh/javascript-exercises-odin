const add = function(a, b) {
  return a + b;    
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers = []) {
  return numbers.reduce((total, element) => total += element, 0);
};

const multiply = function(numbers = []) {
  return numbers.reduce((total, current) => total *= current);
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  if (number === 1 || number === 0) return 1;
  let result = 1;
  for (let i = number; i !== 1; i--){
    result *= i; 
  }
  return result;

	/*if (number === 1){
    return 1;
  }
   
  return number * factorial(number - 1);
  */
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
