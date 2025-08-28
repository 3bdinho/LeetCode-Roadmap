// Problem: Longest Common Prefix
// Link: https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  let result = "";
  const firstWord = strs[0];
  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i];
    for (let str of strs) {
      if (str[i] !== char) return result;
    }
    result += char;
  }
  return result;
};

// Example
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
