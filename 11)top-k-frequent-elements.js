// Problem: Top K Frequent Elements
// Link: https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
  const freq = new Map();
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (let [num, count] of freq) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }
  return result.slice(0, k);
};

// Example
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
