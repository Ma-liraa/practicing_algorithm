/**
 * بررسی می‌کند آیا رشته ورودی متقارن (پالیندروم) است یا خیر.
 * مثال: "GooG" -> true, "Hello" -> false
 */
const isPalindrome = (text) => {
  let leftIndex = 0;
  let rightIndex = text.length - 1;

  while (leftIndex < rightIndex) {
    // اگر کاراکترهای دو طرف یکسان نبودند، پس متقارن نیست
    if (text[leftIndex] !== text[rightIndex]) {
      return false;
    }

    // حرکت اشاره‌گرها به سمت مرکز
    leftIndex++;
    rightIndex--;
  }

  // اگر حلقه تمام شد و مغایرتی پیدا نشد، یعنی متقارن است
  return true;
};

// تست کد
const inputString = "GooG";
const result = isPalindrome(inputString);

// خروجی را اینجا مدیریت می‌کنیم، نه داخل تابع
console.log(result ? "String is Palindrome" : "String is NOT Palindrome");
