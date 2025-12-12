/**
 * بررسی می‌کند که آیا تمام کاراکترهای رشته یکتا هستند.
 * (یعنی هیچ کاراکتری تکرار نشده باشد).
 */
const hasUniqueCharacters = (text) => {
  // حلقه بیرونی: انتخاب کاراکتر مرجع
  for (let outerIndex = 0; outerIndex < text.length; outerIndex++) {
    
    // حلقه داخلی: مقایسه کاراکتر مرجع با تمام کاراکترهای بعد از آن
    for (let innerIndex = outerIndex + 1; innerIndex < text.length; innerIndex++) {
      
      // اگر کاراکتر تکراری پیدا شد، بلافاصله false برگردان
      if (text[outerIndex] === text[innerIndex]) {
        return false;
      }
    }
  }

  // اگر تمام حلقه‌ها تمام شد و تکراری پیدا نشد
  return true;
};

// تست کد
const inputString = "Ma__lira";
const isUnique = hasUniqueCharacters(inputString);

if (isUnique) {
  console.log("All characters are unique.");
} else {
  console.log("Duplicate characters found.");
}