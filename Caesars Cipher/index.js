function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // Create Accumulator
  let accumulator = "";
  // Loop through string
  for (let i = 0; i < str.length; i++) {
    // Set char into string index value
    const char = str[i];
    // Check if the char is in alphabet
    const isALetter = alphabet.includes(char);
    // if char not letter, add to Accumulator
    if (!isALetter) {
      accumulator += char;
    } else {
      // else, rotate + or - 13 (cipher), add to Accumulator
      const charIndex = alphabet.findIndex((c) => c === char);
      // if undefined, it will go "or" and -13 the char
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return accumulator;
}

rot13("SERR PBQR PNZC");
