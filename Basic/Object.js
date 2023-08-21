// Modify an Array Stored in an Object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, "Pete"));

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

const onlineUser = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(allUsers) {
  let i = 0;
  for (const stats in allUsers) {
    console.log(allUsers[stats].online);
    if (allUsers[stats]["online"] === true) i++;
  }
  return i;
}

console.log(countOnline(onlineUser));
