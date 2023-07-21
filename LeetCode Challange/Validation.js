// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  console.log(!stack.length);
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
const input = "()[]{}";
isValid(input);

console.log("==== Break ====");
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
var strStr = function (haystack, needle) {
  if (needle.length == 0) {
    return 0;
  }
  let M = needle.length;
  let N = haystack.length;
  for (let i = 0; i <= N - M; i++) {
    let j;
    for (j = 0; j < M; j++)
      if (haystack.charAt(i + j) != needle.charAt(j)) break;

    if (j == M) {
      return i;
    }
  }
  return -1;
};
// We can use "indexOf()" for simpler solution
const haystack = "sadbutsad";
const needle = "sad";
strStr(haystack, needle);
