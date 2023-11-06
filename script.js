 // Converts an Arabic numeral to a Roman numeral within the range of 1 to 3999.

function convertToRoman(num) {
  // Check if the number is out of the range for Roman numerals.
  if (num <= 0 || num >= 4000) {
    return "Number out of range for Roman numerals";
  }

  // Define Roman numeral mappings.
  const romanNumerals = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10, IX: 9,
    V: 5, IV: 4, I: 1,
  };

  let result = "";

  // Iterate through the Roman numerals.
  for (let key in romanNumerals) {
    // Build the Roman numeral by subtracting the largest possible values.
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result; // Return the converted Roman numeral.
}

// A series of test cases to verify the conversion.
// The function converts Arabic numerals to Roman numerals and logs the results.

