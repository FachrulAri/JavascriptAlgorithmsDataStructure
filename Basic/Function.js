/* Closures Function
   Write a mul function which behaves like below
   mul(1)(1)(1)(1)(1)(); return 5 
*/
function addNum(x) {
  // No name function so we used "arguments"
  return function (y) {
    console.log(x, "X value");
    if (typeof y !== "undefined") {
      console.log(y, "Y value");
      x = x + y;
      // arguments.callee are useful when the name of the function is unknown,
      // such as within a function expression with no name (also called "anonymous functions")
      return arguments.callee;
    } else {
      return x;
    }
  };
}
console.log(addNum(1)(2)(3)(4)());

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];
// Creating new array with function without modify or alter the array. we can use spread operator
function remove(bookList, bookName) {
  const newArr = [...bookList];

  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
  }
  // or we can use command/ function below to simplify it since filter return shallow copy of array without modify base array
  // return list.filter(book => book !== bookName);
}
remove(bookList, "On The Electrodynamics of Moving Bodies");
