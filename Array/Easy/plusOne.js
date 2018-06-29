// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
// T(n)
// S(1)

var plusOne = function(digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
  } else {
    let i = digits.length - 1;
    let carryover = true;

    while (digits[i] + 1 > 9 && carryover === true) {
      carryover = false;
      digits[i] = 0;
      if (digits[i - 1]) {
        digits[i - 1] += 1;
        if (digits[i - 1] > 9) {
          carryover = true;
        }
      } else {
        digits.unshift(1);
      }
      i--;
    }
  }

  return digits;
};
