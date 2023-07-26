// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Solution 1: Bruteforce (by using 2 loop on each item on array and sum it)
var twoSum = function (nums, target) {
  for (let frstItem = 0; frstItem < nums.length; frstItem++) {
    for (let secItem = frstItem + 1; secItem < nums.length; secItem++) {
      console.log(
        "Loop:",
        frstItem,
        secItem,
        "Loop Value: " + nums[frstItem],
        nums[secItem]
      );
      console.log(nums[frstItem] + nums[secItem]);
      if (nums[frstItem] + nums[secItem] == target) return [frstItem, secItem];
    }
  }
};
twoSum([2, 7, 11, 15], 18);

console.log("==== Break ====");

// Solution 2: Map or Hashmap Method (Write non search key value into map. if map has "x", get the key and return it)
var twoSumHash = function (nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    console.log("Search:", x);
    // If there is x in the map, proceed
    if (hashMap.has(x)) {
      console.log(hashMap);
      // Get the map key or value and return it
      return [hashMap.get(x), i];
      // If there is no x in the map, Add
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return [];
};
twoSumHash([2, 7, 11, 15], 17);

console.log("==== Break ====");
// You are given a large integer represented as an integer array digits,
// Where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2].

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0].
var plusOne = function (digits) {
  const num = BigInt(digits.join("")) + 1n;
  const numToString = num.toString();

  let arr = [];

  for (let i = 0; i < numToString.length; i++) {
    const num = parseInt(numToString[i]);
    arr.push(num);
  }
  return arr;
};
console.log(plusOne([4, 3, 2, 9]));
