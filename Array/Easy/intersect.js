// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
// T(n)
// S(n)

var intersect = function(nums1, nums2) {
  let output = [];

  nums1Hash = nums1.reduce((acc, el) => {
    acc[el] ? (acc[el] += 1) : (acc[el] = 1);
    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    let nums2El = nums2[i];
    if (nums1Hash[nums2El] && count(output, nums2El) < nums1Hash[nums2El]) {
      output.push(nums2El);
    }
  }

  return output;
};

// helper function to count elements in an array
var count = function(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
};
