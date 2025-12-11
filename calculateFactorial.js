const calculateFactorial = (number) => {
  if (number <= 1) return 1;
  return number * calculateFactorial(number - 1);
};
const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(result);
