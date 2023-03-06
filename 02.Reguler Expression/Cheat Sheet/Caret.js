// The caret symbol ^ matches the beginning of the string.

// String
const str1 = "a";
const str2 = "ab";
const str3 = "abc";
const str4 = "acd";

//pattern
const patt1 = /^ab/;

//match
const result1 = str1.match(patt1);
const result2 = str2.match(patt1);
const result3 = str3.match(patt1);
const result4 = str4.match(patt1);

//Log
console.log(result1, result2, result3, result4);
