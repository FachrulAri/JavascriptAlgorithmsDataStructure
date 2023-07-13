function palindrome(str) {
  const alphanumericOnly = str
    // 1) Lowercase the input
    .toLowerCase()
    // 2) Strip out non-alphanumeric (special character)
    .match(/[a-z0-9]/g);

  // 3) Join the array to become string and compare it for the reverse
  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

palindrome("eye");

// Number Palindrome
var isPalindrome = function (x) {
  const revPali = parseInt(x.toString().split("").reverse().join(""));
  return revPali == x ? true : false;
};
isPalindrome(-121);
