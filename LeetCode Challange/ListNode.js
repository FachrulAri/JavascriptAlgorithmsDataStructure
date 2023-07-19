// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;
  var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10);
  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
addTwoNumbers(l1, l2);

// Merging 2 list with recursion
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
var mergeTwoLists = function (l1, l2) {
  // if the l1 undefined or doesnt exist, return l2. and the otherwise
  if (!l1) return l2;
  else if (!l2) return l1;
  // if the list 1 item is lower than the current list 2 item. recursive the list 1 array with next item
  // return current l1 item and the otherwise
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    console.log(l1);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
mergeTwoLists([1, 2, 4], [1, 3, 4]);

// Remove Duplicate in 2 array and return 1 Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
//  The remaining elements of nums are not important as well as the size of nums.
// Return k.
var removeDuplicates = function (nums) {
  // if not array return 0
  if (nums.length === 0) {
    return 0;
  }
  var k = 0; // Initialize the count of unique elements (k) as 0
  let kArray = []; // Create array for list of unique item
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      kArray.push(nums[i]);
      k++; // Increment the count of unique elements
    }
  }
  console.log(kArray); // We can use kArray.length to return same value as k
  return k;
};
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log("==== Break ====");

// Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
//  The remaining elements of nums are not important as well as the size of nums.
// Return k.
var removeElement = function (nums, val) {
  // Cant user filter, since its not change the base "nums" array element and using js function
  // console.log(nums.filter((num) => num !== val));
  let j = 0;
  for (let n of nums) if (n !== val) nums[j++] = n;
  return j; // return 3
};
removeElement([3, 2, 2, 3, 1], 3);
