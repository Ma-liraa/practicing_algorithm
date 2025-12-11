const countVowels = (text) => {
  let vowelCount = 0;
  const vowels = "aeiou";
  const normalizedText = text.toLowerCase();
  for (const char of normalizedText) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};
const inputString = "Ma__lira";
const result = countVowels(inputString);
console.log(result);


// Regex
// const countVowels = (text) => {
//   const matches = text.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// };