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
