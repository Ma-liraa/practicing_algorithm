const areAnagrams = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    return false;
  }
  const charFrequency = {};
  for (const char of firstString) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  for (const char of secondString) {
    if (!charFrequency[char]) {
      return false;
    }
    charFrequency[char] -= 1;
  }
  return true;
};
const result = areAnagrams("banana", "nabana");
// console.log(result);

let obj = { s: 1, b: 2 };

console.log(obj["b"] -=1);
