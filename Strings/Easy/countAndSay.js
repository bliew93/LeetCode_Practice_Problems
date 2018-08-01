// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  } else {
    let prevSeq = countAndSay(n - 1);
    let output = "";
    let count = 1;

    for (let i = 0; i < prevSeq.length; i++) {
      if (prevSeq[i + 1] === prevSeq[i]) {
        count += 1;
      } else {
        output += count.toString() + prevSeq[i];
        count = 1;
      }
    }

    return output;
  }
};
