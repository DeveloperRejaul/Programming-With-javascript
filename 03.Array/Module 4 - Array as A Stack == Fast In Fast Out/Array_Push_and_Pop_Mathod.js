/**
 * @Title : Javascript Array Stack Method // Last in Fast Out
 */

// Practic 01
const Arr = [];

// Push
Arr.push('Items One');
Arr.push('Items Tow');
// Pop
Arr.pop();

// Log
Arr;

// Practis 02
const text1 = 'HELLO';
const jsStack = [];

for (let i = 0; i < text1.length; i++) {
  jsStack.push(text1.charAt(i));
}

let result = '';
while (jsStack.length) {
  result += jsStack.pop();
}

// Log
result;
