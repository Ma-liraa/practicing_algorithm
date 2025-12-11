const calculateFibonacci = (position) => {
  if (position < 2) {
    return position;
  }
  return calculateFibonacci(position - 1) + calculateFibonacci(position - 2);
};
const targetIndex = 7;
const result = calculateFibonacci(targetIndex);
console.log(result);
