 
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
// T(n)
// S(1)

var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};
