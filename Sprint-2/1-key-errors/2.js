// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here:
// we have used a number instead of naming the parameter so we should get a syntax error

function square(3) {
  return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// JavaScript read the number 3 as a number rather than the name of the parameter.
// Parameters must have valid names

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
