// Predict and explain first...

// =============> write your prediction here
// The function here is supposed to multiply both parameters by each other but the function multiply has no return so when the function is called by console.log it will return as undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function here is supposed to multiply both parameters by each other but the function multiply has no return so when the function is called by console.log on line 10 it will return as undefined
// however this same function does say to output the result or a multiplied by b so the answer is outputted but not returned to line 10 and therefore we get undefined in that string

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
