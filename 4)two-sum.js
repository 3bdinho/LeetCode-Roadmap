// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const st = new Map();
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (st.has(result)) return [i, st.get(result)];
    st.set(nums[i], i);
  }
  return [0, 0];
};

// Example
console.log(twoSum([2, 7, 11, 15], 9));
