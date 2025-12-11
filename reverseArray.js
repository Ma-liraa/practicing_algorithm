const reverseArray = (items) => {
  let leftIndex = 0;
  let rightIndex = items.length - 1;
  while (leftIndex < rightIndex) {
    [items[leftIndex], items[rightIndex]] = [
      items[rightIndex],
      items[leftIndex],
    ];
    leftIndex++;
    rightIndex--;
  }
  return items;
};
const numbers = [10, 20, 40, 30];
console.log(reverseArray(numbers));
