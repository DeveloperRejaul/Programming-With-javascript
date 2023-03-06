//String
const str1 = "hello my name";
//Pattern
const patt1 = /\bna/g; //Beaging word
const patt2 = /lo\b/g; // Ending word

// \B matches only within a word.
const patt3 = /he\B/g; //Beaging word
const patt4 = /\Blo/g; //Ending word

// Match
const result1 = str1.match(patt1);
const result2 = str1.match(patt2);
const result3 = str1.match(patt3);
const result4 = str1.match(patt4);


//Log
console.log(result1, result2, result3,result4);
