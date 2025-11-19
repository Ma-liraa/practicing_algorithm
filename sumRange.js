const sumRange = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

const result = sumRange(2, 5);
console.log(result);
