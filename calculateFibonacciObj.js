const calculateFibonacciObj = (position, memo = {}) => {
  if (position in memo) return memo[position];
  if (position < 2) {
    return position;
  }
  memo[position] =
    calculateFibonacciObj(position - 1, memo) +
    calculateFibonacciObj(position - 2, memo);
  return memo[position];
};
const targetIndex = 10;
const result = calculateFibonacciObj(targetIndex);
console.log(result);
