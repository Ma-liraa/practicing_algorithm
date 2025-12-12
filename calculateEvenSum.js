const calculateEvenSum = (limit) => {
  let totalSum = 0;
  for (let currentNumber = 2; currentNumber <= limit; currentNumber += 2) {
    totalSum += currentNumber;
  }
  return totalSum;
};
const inputLimit = 5;
const result = calculateEvenSum(inputLimit);
console.log(result);


// O(1)
// const calculateEvenSumMath = (limit) => {
//   const k = Math.floor(limit / 2);
//   return k * (k + 1);
// };
