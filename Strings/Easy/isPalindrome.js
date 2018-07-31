// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

var isPalindrome = function(s) {
  charStr = s.toLowerCase().replace(/\W/g, "");
  const midPoint = Math.floor(charStr.length / 2);

  for (let i = 0; i < midPoint; i++) {
    endPoint = charStr.length - i - 1;
    if (charStr[i] !== charStr[endPoint]) {
      return false;
    }
  }

  return true;
};
