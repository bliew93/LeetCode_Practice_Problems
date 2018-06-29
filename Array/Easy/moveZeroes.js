// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
// T(n)
// S(1)

var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      let zero = nums.splice(i, 1)[0];
      nums.push(zero);
    }
  }
};
