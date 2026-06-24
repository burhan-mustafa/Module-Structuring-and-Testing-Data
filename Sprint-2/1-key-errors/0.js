// Predict and explain first...
// =============> write your prediction here
// An error will be thrown because str has already been declared as the function's parameter.
// The function parameter and the let variable are both declared in the same function scope.

// Call the function capitalise with a string input.
// Interpret the error message and figure out why an error is occurring.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error occurs because str is already declared as the function's parameter, so it cannot be
// declared again using let inside the same scope. By changing the new variable's name to
// capitalisedStr, there is no longer a naming conflict and the code runs without any errors.

// =============> write your new code here

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("mmm"));
