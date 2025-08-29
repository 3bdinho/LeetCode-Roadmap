var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let f = 0,
    l = s.length - 1;
  while (f < l) {
    if (s[f] !== s[l]) {
      return false;
    }
    f++;
    l--;
  }
  return true;
};
