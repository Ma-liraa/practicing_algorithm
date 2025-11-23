const num = 12321;
const arr = [];
const str = String(num);

for (let i = 0; i < str.length; i++) {
  arr.push(Number(str[i]));
}

const palindromNumberFn = (num) => {
  for (let i = 1; i <= num.length; i++) {
    let bo = num.length - i;
    if (num[i - 1] !== num[bo]) return "num is not Palindrom";
  }
  return "num is Palidrom";
};

const result = palindromNumberFn(arr);
console.log(result);
