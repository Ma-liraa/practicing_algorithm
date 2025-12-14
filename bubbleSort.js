const bubbleSort = (items) => {
  let swip = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - i - 1; j++) {
      if (items[j] > items[j + 1]) {
        swip = items[j];
        items[j] = items[j + 1];
        items[j + 1] = swip;
      }
    }
  }
  return items;
};
const result = bubbleSort([4, 1, 6, 10, 3, 2]);
console.log(result);
