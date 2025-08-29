var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i + 1] - prices[i];
    if (profit > 0) maxProfit += profit;
  }
  return maxProfit;
};
