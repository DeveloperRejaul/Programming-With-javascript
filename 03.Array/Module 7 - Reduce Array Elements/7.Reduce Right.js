/**
 *@Title : Reduce Right
 */

//  Understand Reduce Right

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

//
const result = arr.reduceRight((acc, cur) => {
  return acc.concat(cur);
}, []);

const num = [1, 2, 3, 4, 5];

const sum = num.reduceRight((acc, cur) => {
  console.log(`Acc= ${acc}, cur= ${cur}`);
  return acc + cur;
}, 0);
