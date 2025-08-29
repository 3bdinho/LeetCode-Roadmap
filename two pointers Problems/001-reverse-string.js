var reverseString = function (s) {
  let f = 0,
    l = s.length - 1;
  let temp;
  while (f < l) {
    temp = s[f];
    s[f] = s[l];
    s[l] = temp;
    l--;
    f++;
  }
};
