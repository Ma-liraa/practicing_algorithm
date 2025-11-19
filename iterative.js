const iterativeFn = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return iterativeFn(n - 1) + iterativeFn(n - 2);
};

const n = 5;
const result = iterativeFn(n);
console.log(result);
