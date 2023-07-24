// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not,
//  return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // Cut the array in half until we find the position for target
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
const nums = [1, 3, 5, 6];
const target = 7;
searchInsert(nums, target);
