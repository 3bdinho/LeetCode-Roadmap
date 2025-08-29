var longestConsecutive = function (nums) {
  const st = new Set(nums);
  let longest = 0;
  for (let val of st) {
    if (!st.has(val - 1)) {
      let count = 1;
      while (st.has(val + count)) {
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};
