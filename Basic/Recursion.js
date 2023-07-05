// Replace Loops with recursion
// Sum using recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log("Sum", sum([2, 5, 3, 4, 2, 1], 5));

// Countdown Recursion
function countdown(n) {
  if (n <= 0) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log("Countdown", countdown(5));

// Range of Number using Recursion
// startNum to endNum only ++
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 50));
