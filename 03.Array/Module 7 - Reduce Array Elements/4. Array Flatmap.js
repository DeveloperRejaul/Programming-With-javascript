/**
 * @Title : Example array  Flatmap
 */

// Without Flat map
const arr = [1, 2, 3, 4, 5];
const map = arr.map(x => [x * 2]).flat();

// Using Flatmap 01
const flatmap = arr.flatMap(x => [x * 2]);

// Using Flatmap 02
const flatmap1 = arr.flatMap(x => [x, x * 2]);

// Useing Reduse For flatmap 01
const reduceFlatmap = arr.reduce((acc, cur) => {
  return acc.concat(cur * 2);
}, []);

// Useing Reduse For flatmap 02
const reduceFlatmap1 = arr.reduce((acc, cur) => {
  return acc.concat([cur, cur * 2]);
}, []);
