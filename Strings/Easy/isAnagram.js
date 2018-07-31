// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  s_arr = s.split("").sort();
  t_arr = t.split("").sort();

  for (let i = 0; i < s_arr.length; i++) {
    if (s_arr[i] !== t_arr[i]) {
      return false;
    }
  }

  return true;
};
