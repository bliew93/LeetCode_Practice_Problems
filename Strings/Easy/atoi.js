// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

var myAtoi = function(str) {
  let num = parseInt(str);

  if (typeof num === "number" && !isNaN(num)) {
    if (num < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    } else if (num > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else {
      return parseInt(str);
    }
  } else {
    return 0;
  }
};
