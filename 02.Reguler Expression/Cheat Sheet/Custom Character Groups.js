// String
const str1 = "a";
const str2 = "ac";
const str3 = "the boy is very cute";
const str4 = "the boy is very happy 626w8w82";
//Pattern
const Pattern1 = /[abc]/;
const Pattern2 = /[abc]/g;
const Pattern3 = /[0-9]/g;
const Pattern4 = /[^0-9]/g;
const Pattern5 = /[a-z]/g;
const Pattern6 = /[^a-z]/g;
const Pattern7 = /..[^a-z]/g;

// Match
const result1 = str1.match(Pattern1);
const result2 = str2.match(Pattern1);
const result3 = str3.match(Pattern1);
const result4 = str3.match(Pattern2);
const result5 = str4.match(Pattern3);
const result6 = str4.match(Pattern4);
const result7 = str4.match(Pattern5);
const result8 = str4.match(Pattern6);
const result9 = str4.match(Pattern7);

//Log
console.log(
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
  result9
);
