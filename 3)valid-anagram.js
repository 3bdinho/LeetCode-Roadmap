// Problem: Valid Anagram
// Link: https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s[i].toLowerCase().charCodeAt() - 97]++;
    freq[t[i].toLowerCase().charCodeAt() - 97]--;
  }
  for (let i = 0; i < 26; i++) {
    if (freq[i] !== 0) return false;
  }
  return true;
};

// Example
console.log(isAnagram("anagram", "nagaram"));
