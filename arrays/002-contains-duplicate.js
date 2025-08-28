// Problem: Contains Duplicate
// Link: https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  const st = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (st.has(nums[i])) return true;
    else st.add(nums[i]);
  }
  return false;
};

// Example
console.log(containsDuplicate([1, 2, 3, 1]));
