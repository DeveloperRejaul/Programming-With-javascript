//The parenthesis is used for grouping. Sub patterns can be formed using ().

// String
const str1 = "ab";
const str2 = "ababcd";
const str3 = "cabaacd";
const str4 = "a123x3b";
const str5 = "axd";
const str6 = "c9x23d3";

//pattern
const patt1 = /(ab)+/;
const patt2 = /([0-9]|[x])+/;

//Match
const result1 = str1.match(patt1);
const result2 = str2.match(patt1);
const result3 = str3.match(patt1);
const result4 = str4.match(patt2);
const result5 = str5.match(patt2);
const result6 = str6.match(patt2);

//Log
console.log(result1, result2, result3, result4, result5,result6);
