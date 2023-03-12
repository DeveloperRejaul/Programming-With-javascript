/**
 * @Title : Mands on Readuce
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Impelemant Sum
function sumFunc(accomolator, currentValue) {
  return accomolator + currentValue;
}
const sum = numbers.reduce(sumFunc);
// console.log(sum);

// Impelemant Average
const avg = numbers.reduce((acc, cur, index, arr) => {
  acc += cur;
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
});

console.log(avg);
