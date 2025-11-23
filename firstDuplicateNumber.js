const duplicateNumberFn = (arr) => {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return `Number ${arr[i]} is duplicated`;
    } else {
      seen[arr[i]] = true;
    }
  }
  return "Any number is not duplicated";
};
const result = duplicateNumberFn([1, 2, 0, 7, 0, 6, 1]);
console.log(result);
