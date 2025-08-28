// Problem: Sort an Array
// Link: https://leetcode.com/problems/sort-an-array/

const merge = function (left, right) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  const mid = Math.trunc(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  return merge(sortedLeft, sortedRight);
};

// Example
console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]
