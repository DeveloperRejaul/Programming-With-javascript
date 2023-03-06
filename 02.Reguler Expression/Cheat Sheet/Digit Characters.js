//String
const str1 = "hello my name &#%#&* 54";
//Pattern
const patt1 = /\d/g;
const patt2 = /\D/g;

// Match
const result1 = str1.match(patt1);
const result2 = str1.match(patt2);

//Log
console.log(result1, result2);
