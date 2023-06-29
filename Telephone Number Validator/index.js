function telephoneCheck(str) {
  // Creating Regex for validation and insert it into array and use test function to return if 'true' of 'false' value
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/,
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}
