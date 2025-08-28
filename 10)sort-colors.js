// Problem: Sort Colors
// Link: https://leetcode.com/problems/sort-colors/

var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};

// Example
const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
