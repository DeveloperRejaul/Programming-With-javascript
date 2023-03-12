/**
 * @Titel : Matrix Sum
 */

const matrixSum = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Horizontal sum
const resultH = matrixSum.map(row => {
  return row.reduce((acc, cur) => acc + cur);
});

// Vertical Sum
const resultV = matrixSum.reduce((a, c) => {
  return a.map((v, i) => c[i] + v);
});

// Flat Sum
const resultF = matrixSum.reduce((acc, cur) => {
  return acc + cur.reduce((a, c) => a + c);
}, 0);
