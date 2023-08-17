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
// Check if an Object has a Property
// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  if (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ) {
    return true;
  }
  return false;
  // Simplified
  // return userObj.hasOwnProperty("Alan") &&
  // userObj.hasOwnProperty("Jeff") &&
  // userObj.hasOwnProperty("Sarah") &&
  // userObj.hasOwnProperty("Ryan");

  // Or we can use this code
  // return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
  //   userObj.hasOwnProperty(name)
  // );
}

console.log(isEveryoneHere(users));
