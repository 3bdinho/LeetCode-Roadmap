var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  //prefix
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  //sufix
  let sufix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= sufix;
    sufix *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
