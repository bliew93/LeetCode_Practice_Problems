// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// New array solution
// T(n)
// S(n)
// var rotate = function(nums, k) {
//   const rotateFactor = k % nums.length;
//   return nums.slice(k + 1, nums.length).concat(nums.slice(0, k + 1));
// };

// Modify in-place solution
// T(n)
// S(1)

var rotate = function(nums, k) {
  let rotateFactor = k % nums.length;
  while (rotateFactor > 0) {
    const movingNum = nums.splice(nums.length - 1, 1)[0];
    nums.unshift(movingNum);
    rotateFactor--;
  }
};
