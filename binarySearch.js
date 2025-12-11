const binarySearch = (sortedNumbers, targetValue) => {
  let leftIndex = 0;
  let rightIndex = sortedNumbers.length - 1;
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middleValue = sortedNumbers[middleIndex];
    if (middleValue === targetValue) {
      return middleIndex;
    }
    if (middleValue < targetValue) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const result = binarySearch(numbers, 2);
console.log(result);
