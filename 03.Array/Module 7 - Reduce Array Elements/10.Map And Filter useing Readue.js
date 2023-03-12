/**
 * @Title : Map And Filter Useing Readuce
 */

const numbers = [1, 2, 3, 4, 5];
// Maped

const squre = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);

// Filter

const odds = numbers.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);

// Big Array
const bigArr = [];
for (let i = 0; i < 5000000; i++) {
  bigArr.push(i);
}

// Map And Filter Chain - Time Efficiency
// console.time('Both');
bigArr.filter(v => v % 2 === 0).map(v => v * 2);
// console.timeEnd('Both');

// Map And Filter Reduce - Time Efficiency
console.time('Both');
bigArr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);

console.timeEnd('Both');
