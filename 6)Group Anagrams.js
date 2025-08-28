// Problem: Group Anagrams
// Link: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
  const mp = new Map();
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    if (!mp.has(word)) {
      mp.set(word, []);
    }
    mp.get(word).push(strs[i]);
  }
  return Array.from(mp.values());
};

// Example
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
