const sumFn = (num) => {
  let count = 0;
  for (let i = 2; i <= num; i += 2) {
    count += i;
  }
  return count;
};

const result = sumFn(5);
console.log(result);
