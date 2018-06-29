// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
// slow solution
// var twoSum = function(nums, target) {
//   let twoPairs = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         twoPairs = [i, j];
//       }
//     }
//   }

//   return twoPairs;
// };

// fast solution
var twoSum = function(nums, target) {
  let twoPairs = {};

  for (let i = 0; i < nums.length; i++) {
    if (!twoPairs[target - nums[i]] && twoPairs[target - nums[i]] !== 0) {
      twoPairs[target - nums[i]] = i;
    }
    if (twoPairs[nums[i]] || twoPairs[nums[i]] === 0) {
      if (twoPairs[nums[i]] !== i) {
        return [twoPairs[nums[i]], i];
      }
    }
  }
};
