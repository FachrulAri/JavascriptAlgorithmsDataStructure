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
