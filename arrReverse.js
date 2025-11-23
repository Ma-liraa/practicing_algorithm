const arrReversFn = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let temp = 0;
  while (i < j) {
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
  return arr;
};
const result = arrReversFn([10, 20, 40, 30]);
console.log(result);
