const calculateSumInRange = (startNumber, endNumber) => {
  let totalSum = 0;
  for (
    let currentNumber = startNumber;
    currentNumber <= endNumber;
    currentNumber++
  ) {
    totalSum += currentNumber;
  }
  return totalSum;
};
const result = calculateSumInRange(2, 5);
console.log(result);

// O(1)
// const calculateSumInRange = (start, end) => {
//   const count = end - start + 1;
//   return (count * (start + end)) / 2;
// };
