const insertionSort = (items) => {
  let current;
  for (let i = 1; i < items.length; i++) {
    current = items[i];
    let j = i - 1;

    while (j >= 0 && items[j] > current) {
      items[j + 1] = items[j];
      j--;
    }

    items[j + 1] = current;
  }
  return items;
};

const result = insertionSort([5, 3, 8, 4, 2]);
console.log(result);
