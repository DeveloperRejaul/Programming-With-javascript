const str = "my name is rejaul";

const pattern1 = /./;
const pattern2 = /..../;
const pattern3 = /...../ig;

const result1 = str.match(pattern1);
const result2 = str.match(pattern2);
const result3 = str.match(pattern3);
//Log
console.log(result1, result2,result3);
