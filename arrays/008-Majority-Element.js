// Problem: Majority Element
// Link: https://leetcode.com/problems/majority-element/

// Solution 1
var majorityElement = function (nums) {
  nums.sort();
  const i = Math.trunc(nums.length / 2);
  return nums[i];
};

// Solution 2 (Boyer-Moore Voting Algorithm)
var majorityElement2 = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};

// Example
console.log(majorityElement([3, 2, 3]));
