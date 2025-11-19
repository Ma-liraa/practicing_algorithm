const maxNum = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const result = maxNum([40, 19, 30, 10, 3, 20]); // result = 30
console.log(result);
