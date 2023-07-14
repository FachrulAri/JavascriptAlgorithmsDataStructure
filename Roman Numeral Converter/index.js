function convertToRoman(num) {
  // Create Roman Numeral to number lookup table
  const romanTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Create roman numeral accumulator
  let accumulator = "";

  // Loop through roman table
  // Loop at least 1 time for each roman table key (M,CM,D,...)
  for (const key in romanTable) {
    // Take the value from the key
    const numberValue = romanTable[key];
    // if currentNum <= num then substract currentNum from num. add roman numeral to accumulator
    // while it still substractable, keep looping
    while (numberValue <= num) {
      // Substract num with numberValue
      num -= numberValue;
      // Add roman numeral string (key) to accumulator
      accumulator += key;
    }
  }
  return accumulator;
}

convertToRoman(36);

console.log("==== Break ====");

// Roman To Numeral
var romanToInt = function (s) {
  // Create Roman Numeral Object
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // Explanation of object with square bracket notation "[]" means contain the key of object as string
  // We cannot use dot notation "." to access a property whose name is not a valid JavaScript identifier
  // And if string had square bracket  means individual characters correspond to a numerical index
  // Example: Object["String Key"[index of the char]]
  // Create accumulator for total
  let accumulator = 0;
  // Loop based on how long string is
  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];
    // If the current index of string is lower than next string.
    // The "next" value will substract with "cur" Example:"IX" (10 - 1) and add into accumulator
    if (cur < next) {
      accumulator += next - cur;
      // +1 on loop index since we already add the NEXT ROMAN and substract it with current
      i++;
    }
    // If not lower than next string, just add current loop string index ("cur")
    else {
      accumulator += cur;
    }
    // Or we can simplify inside the loop into this
    //   sym[s[i]] < sym[s[i + 1]]
    //     ? (accumulator -= sym[s[i]])
    //     : (accumulator += sym[s[i]]);
  }
  console.log(accumulator);
  return accumulator;
};

romanToInt("MCMXCIV");
