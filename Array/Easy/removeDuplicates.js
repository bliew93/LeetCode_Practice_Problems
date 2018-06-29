 // https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
// T(n)
// S(1)

var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return [];
  } else {
    let currentIdx = 0;
    let nextIdx = 1;
    while (currentIdx !== nums.length - 1) {
      if (nums[currentIdx] === nums[nextIdx]) {
        nums.splice(nextIdx, 1);
      } else {
        currentIdx++;
        nextIdx = currentIdx + 1;
      }
    }

    return nums.length;
  }
};
