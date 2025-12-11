const countOccurrences = (numbers) => {
  const counts = {};
  for (const number of numbers) {
    counts[number] = (counts[number] || 0) + 1;
  }
  return counts;
};
const inputNumbers = [1, 2, 1, 3, 1, 2, 3, 2, 2, 2];
const result = countOccurrences(inputNumbers);
console.log(result);
