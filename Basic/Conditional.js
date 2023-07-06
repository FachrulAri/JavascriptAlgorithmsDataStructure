// Ternary
// Below is simplification from normal conditional into ternary operator
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}
// Into this
// function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
//   }
// We can remove the parantheses
function findGreaterOrEqualTernary(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
