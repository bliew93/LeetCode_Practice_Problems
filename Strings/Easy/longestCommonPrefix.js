// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

var longestCommonPrefix = function(strs) {
  let commonPrefix = "";
  let idx = 0;
  let stillCommon = true;

  if (strs.length === 0) {
    return commonPrefix;
  } else {
    while (stillCommon) {
      let char = strs[0][idx];

      for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        if (word[idx] !== char || char === undefined) {
          stillCommon = false;
          break;
        }
      }

      if (stillCommon) {
        commonPrefix += char;
      }

      idx += 1;
    }

    return commonPrefix;
  }
};
