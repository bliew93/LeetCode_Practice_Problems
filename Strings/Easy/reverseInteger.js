// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

var reverse = function(x) {
  let negativeSign;
  let trailingZeroes = /([1-9]+)([0]+)$/;

  x = x.toString();

  if (x.match(trailingZeroes)) {
    x = x.replace(trailingZeroes, "$1");
  }

  if (x.includes("-")) {
    negativeSign = x[0];
    x = x.slice(1, x.length);
  }

  x = x
    .split("")
    .reverse()
    .join("");

  if (negativeSign) {
    x = negativeSign.concat(x);
  }

  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return Number(x);
  }
};
