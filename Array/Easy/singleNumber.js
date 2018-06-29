// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
// T(n)
// S(1)

var singleNumber = function(nums) {
  let output = nums[0];
  for (let i = 1; i < nums.length; i++) {
    output = output ^ nums[i];
  }

  return output;
};
