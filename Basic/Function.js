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
