const add = (a, b) => {
  return a + b;
};

const subs = (a, b) => {
  return Math.abs(a - b);
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2); //creating operator function which is just like a refference of other function..
  // return add(5,3);   it just like we are calling add function...
};

console.log(calculator(5, 3, mult)); //here calculator is a higher order function and add/subs/mult/div are the call back function...
