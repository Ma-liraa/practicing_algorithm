// بخش ۱: آماده‌سازی داده‌ها
const originalNumber = 12321;
const digits = []; // نام arr خیلی کلی است، digits (ارقام) دقیق است

// تبدیل عدد به رشته برای جداسازی ارقام
const numberString = String(originalNumber);

// پر کردن آرایه ارقام
for (let i = 0; i < numberString.length; i++) {
  // تبدیل هر کاراکتر به عدد و افزودن به لیست
  digits.push(Number(numberString[i]));
}

// بخش ۲: تابع منطقی
/**
 * بررسی می‌کند آیا لیست ارقام به صورت متقارن (پالیندروم) چیده شده‌اند یا خیر.
 */
const isNumericPalindrome = (digitList) => {
  let leftIndex = 0;
  let rightIndex = digitList.length - 1;

  while (leftIndex < rightIndex) {
    // مقایسه عدد سمت چپ با عدد سمت راست
    if (digitList[leftIndex] !== digitList[rightIndex]) {
      return false;
    }

    // حرکت به سمت مرکز
    leftIndex++;
    rightIndex--;
  }

  return true;
};

// تست کد
const result = isNumericPalindrome(digits);

if (result) {
  console.log("The number is a Palindrome.");
} else {
  console.log("The number is NOT a Palindrome.");
}
