/**
 * بزرگترین عدد موجود در لیست اعداد را پیدا می‌کند.
 */
const findMaximumValue = (numbers) => {
  // فرض می‌کنیم اولین عدد، بزرگترین است
  // این روش باعث می‌شود کد برای اعداد منفی هم درست کار کند
  let maxNumber = numbers[0];

  for (const currentNumber of numbers) {
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
};

// تست کد
const numberList = [40, 19, 30, 10, 3, 20];
const result = findMaximumValue(numberList);

console.log(result); // 40
