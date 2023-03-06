//The * symbol is used to check if there are zero or more occurrences of the pattern to the left of the symbol.

// String
const str1 = "ac";
const str2 = "abc";
const str3 = "abbc";
const str4 = "abd";

//pattern
const patt1 = /ab*c/;

//match
const result1 = str1.match(patt1);
const result2 = str2.match(patt1);
const result3 = str3.match(patt1);
const result4 = str4.match(patt1);

//Log
console.log(result1, result2, result3, result4);
