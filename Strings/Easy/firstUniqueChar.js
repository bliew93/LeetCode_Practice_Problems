// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

var firstUniqChar = function(s) {
  let charHash = {};

  for (let i = 0; i < s.length; i++) {
    charHash[s[i]]
      ? (charHash[s[i]] = charHash[s[i]].concat(i))
      : (charHash[s[i]] = [i]);
  }

  // slow af
  for (let ch in charHash) {
    if (charHash[ch].length === 1) {
      return charHash[ch][0];
    }
  }

  return -1;
};
