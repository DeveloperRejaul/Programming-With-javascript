/**
 * @Title : Example array flaten
 */

let nestdArray = [[1, 2], 3, [4, 5], [6]];
// Result => [1,2,3,4,5,6]

// Array flat mathod
const flatArray1 = nestdArray.flat();

// We can do the same useing Reduce mathod

const flatArray2 = nestdArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []); // Node : [] dara:  acc er inatial value empaty arra set kura huyece
