const ch = "GooG";
const palindromCharacterFn = (ch) => {
  let i = 0;
  let j = ch.length - 1;
  while (i < j) {
    if (ch[i] !== ch[j]) return "character is not Palidrom";
    i++;
    j--;
  }
  return "character is Palidrom";
};

const result = palindromCharacterFn(ch);
console.log(result);
