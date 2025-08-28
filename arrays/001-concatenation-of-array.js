// Problem: Concatenation of Array
// Link: https://leetcode.com/problems/concatenation-of-array/

const getConcatenation = function (nums) {
  const n = nums.length;
  const arr = [];
  for (let i = 0; i < n * 2; i++) {
    if (i < n) arr[i] = nums[i];
    else arr[i] = nums[i - n];
  }
  return arr;
};

// Solution 2

const getConcatenation1 = function (nums) {
  return [...nums, ...nums];
};

// Example
console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation1([1, 2, 1]));
