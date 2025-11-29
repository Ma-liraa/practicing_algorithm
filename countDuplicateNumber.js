// input => [1,2,1,3,1,2,3,2,2,2]
// output => {1:3, 2:5, 3:2 }

const countDuplicateNumberFn = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
};
const result = countDuplicateNumberFn([1, 2, 1, 3, 1, 2, 3, 2, 2, 2]);
console.log(result);
