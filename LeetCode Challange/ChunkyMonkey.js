// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
