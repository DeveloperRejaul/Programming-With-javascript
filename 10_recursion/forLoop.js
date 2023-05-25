// Create a for loop using recursion function
function recursiveForLoop(start, end, increment, callback) {
  if (start <= end) {
    callback(start);
    recursiveForLoop(start + increment, end, increment, callback);
  }
}

recursiveForLoop(0, 5, 1, (value) => {
  console.log(value);
});
