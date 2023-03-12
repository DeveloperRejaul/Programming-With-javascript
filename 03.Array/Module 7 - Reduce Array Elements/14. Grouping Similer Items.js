/**
 * @Title : Groping Similer Items
 */

const word = [
  'One',
  'Tow',
  'three',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Tan',
];

const group = word.reduce((acc, cur) => {
  const len = cur.length;

  if (acc[len]) acc[len].push(cur);
  acc[len] = [cur];
  return acc;
}, {});

console.log(group);
