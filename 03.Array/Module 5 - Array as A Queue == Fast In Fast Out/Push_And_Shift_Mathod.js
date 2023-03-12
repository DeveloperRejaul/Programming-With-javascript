/**
 * @Title : Array Push And Shift
 * Rouls : Fast In Fast Out // je fast e dokbe se fast e bahir hube
 */

// Practis 01
const arr = [];

//
arr.push('01');
arr.push('02');
arr.push('03');
//
arr.shift();

// Log
arr;

// Practis 02
const q = [];
const text = 'HELLO';

for (let i = 0; i < text.length; i++) {
  q.push(text.charAt(i));
}
// log
q;

let q2 = [];
for (let j = 0; j < text.length; j++) {
  q2 += q.shift();
}
// log
q2;

