//Braces with a single number denote a specific number of repetitions. If the brace has two numbers, in the format {n,m}, n denotes the minimum, and m denotes the maximum number of repetitions of the pattern to the left.

// String
const str1 = "abc def";
const str2 = "abc daad";
const str3 = "aabc daaad";
const str4 = "4";
const str5 = "12 heare 34567 there";

//pattern
const patt1 = /a{2,3}/g;
const patt2 = /[0-9]{2,3}/g;

//Match
const result1 = str1.match(patt1);
const result2 = str2.match(patt1);
const result3 = str3.match(patt1);
const result4 = str4.match(patt2);
const result5 = str5.match(patt2);

//Log
console.log(result1, result2, result3,result4,result5);
