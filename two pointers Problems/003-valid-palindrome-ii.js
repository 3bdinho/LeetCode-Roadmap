var validPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  function isPalindrome(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  let f = 0,
    l = s.length - 1;

  while (f < l) {
    if (s[f] !== s[l]) {
      return isPalindrome(f + 1, l) || isPalindrome(f, l - 1);
    }
    f++;
    l--;
  }
  return true;
};
