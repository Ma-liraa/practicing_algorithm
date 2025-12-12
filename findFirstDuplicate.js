const findFirstDuplicate = (numbers) => {
  const seenNumbers = {};
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (seenNumbers[currentNumber]) {
      return currentNumber;
    }
    seenNumbers[currentNumber] = true;
  }
  return -1;
};
const inputNumbers = [1, 2, 0, 7, 0, 6, 1];
const duplicate = findFirstDuplicate(inputNumbers);

if (duplicate !== -1) {
  console.log(`Number ${duplicate} is duplicated.`);
} else {
  console.log("No duplicates found.");
}
