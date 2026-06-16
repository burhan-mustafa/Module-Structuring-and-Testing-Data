const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 3–6. const penceStringWithoutTrailingP takes the initial constant variable with the value of "399p" and uses the substring function to make a new string
//     without the "p". It uses the .length property to return the number of characters in the string and subtracts 1 so that substring stops before the last
//     character, which will always remove the "p".

// 8.  the next variable paddedPenceNumberString takes the previous string which only has number characters and checks if it is made up of three characters if it is not it
//     is padded with "0" at the start of the string till there are three characters the reason for this is the minimum amount of characters needed to represent pounds and
//     pence can be represented by is 3.

// 9-12. The next variable pounds takes the previous variable paddedPenceNumberString and uses the substring function to create a new string without the last
//     two characters. It uses .length - 2 to stop before the final two characters because those characters represent the pence leaving only the characters
//     that represent the pounds.

// 14-16. The next variable pence takes paddedPenceNumberString and uses the substring function starting from two characters before the end of the string.
//     This creates a new string containing only the final two characters which represent the pence. The padEnd function then adds "0" to the end of the
//     string until it contains two characters making sure that the pence is always displayed using two digits.

// 18. The console.log uses a template literal to combine the pound sign with the pounds and pence variables. A decimal point is placed between the two
//     variables so that the final value is displayed as a price in pounds, for example "£3.99".
