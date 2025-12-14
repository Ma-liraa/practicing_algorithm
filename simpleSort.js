const simpleSort = (items) => {
  let swip = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] > items[j]) {
        swip = items[i];
        items[i] = items[j];
        items[j] = swip;
      }
    }
  }
  return items;
};
const result = simpleSort([10, 4, 1, 6, 3, 2]);
console.log(result);
