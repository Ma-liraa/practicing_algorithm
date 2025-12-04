const binarySearchFn = (arr, target) => {
  let high = arr.length - 1;
  let low = 0;
  while (high >= low) {
    let mid = Math.round((high + low) / 2);
    let guess = arr[mid];
    if (guess < target) {
      low = mid + 1;
    }
    if (guess > target) {
      high = mid - 1;
    }
    if (guess === target) {
      return mid;
    }
  }
  return "targrt not in array";
};
const result = binarySearchFn([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 2);
console.log(result);
