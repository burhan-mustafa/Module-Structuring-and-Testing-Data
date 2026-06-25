// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Since line 7 uses a const variable that can not be changed I would expect the last digit to be remain three since num has been assigned to be 103

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// // Line 7 uses the const variable num which has been assigned the value 103 and the last digit of that number is 3. When the function getLastDigit is called it
// returns the last digit of num. Regardless of what number we use when calling the function it will always return 3 because the function has no parameter to read
// the arguments and always uses the value stored inside num instead.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// getLastDigit is not working properly because the function has no parameter to read the numbers used when it is called upon. Instead it always uses the const variable
// num which has been assigned the value 103 so it will always return the last digit of 3.
