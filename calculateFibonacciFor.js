const calculateFibonacciFor = (targetPosition) => {
  if (targetPosition < 2) {
    return targetPosition;
  }
  let previousNumber = 0;
  let currentNumber = 1;
  for (let i = 2; i <= targetPosition; i++) {
    const nextNumber = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
  return currentNumber;
};
const targetIndex = 10;
const result = calculateFibonacciFor(targetIndex);
console.log(result);
