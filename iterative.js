const iterativFn = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return iterativFn(n - 1) + iterativFn(n - 2);
};

const n = 5; // 5 => 1 + 2 = 3
const result = iterativFn(n);
console.log(result);
