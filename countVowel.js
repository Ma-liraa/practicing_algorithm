const str = "Ma__lira"; // a, e, i, o, u
// str = 5

const countStrVowel = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        count += 1;
        break;
      case "e":
        count += 1;
        break;
      case "i":
        count += 1;
        break;
      case "o":
        count += 1;
        break;
      case "u":
        count += 1;
        break;
    }
  }
  return count;
};
const result = countStrVowel(str.toLocaleLowerCase());
console.log(result);
