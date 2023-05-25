// way 01
const decrementNumber = (value, cb) => {
  if (value !== 0) {
    cb(value);
    return decrementNumber(--value, cb);
  }
};
// decrementNumber(10, (value) => {
//   console.log(value);
// });

// way 02 // with out callback function
var num = 0;
const decrementNumber2 = (value) => {
  if (value !== 0) {
    num += value;
    decrementNumber2(--value);
  }
  return num; // get final value => result 0
};
const result = decrementNumber2(10);
console.log(result);
