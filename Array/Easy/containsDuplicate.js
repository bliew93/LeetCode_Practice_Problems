// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
// T(n)
// S(n)

var containsDuplicate = function(nums) {
  let counterHash;

  counterHash = nums.reduce((acc, el) => {
    if (acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }

    return acc;
  }, {});

  return Object.values(counterHash).some(el => el > 1);
};
