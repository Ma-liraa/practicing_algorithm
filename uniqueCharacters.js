const str = "Ma__lira";

const UniqueFn = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      console.log(str[i]);
      console.log(str[j]);
      if (str[i] === str[j]) {
        return "str is not unique";
      }
    }
  }
  return "str is unique";
};

const result = UniqueFn(str);
console.log(result);
