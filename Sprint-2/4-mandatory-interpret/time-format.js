function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// The pad function is called upon 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// num is = 0

// c) What is the return value of pad is called for the first time?
// the return value is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// the value assigned is 1 this is because when the value 61 is passed into the formatTimeDisplay function it sends totalHours,
// remainingMinutes and remainingSeconds in that order to the pad function. Since we know the remainingSeconds is sent last
// and that 61 divided by 60 leaves us with a remainder of 1 we know 1 will be the last value assigned to num.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
//  the return value will be "01" as when the value 1 is passed into the pad function it is converted into a string, which is "1" in this case,
//  that string is then passed into a while loop which checks if the string is less than two characters and adds a "0" to the start of the string
//  so "1" becomes "01" and is then returned.
