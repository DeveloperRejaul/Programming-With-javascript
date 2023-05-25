// way 01
var newString = "";
const stringReverse = (string = "") => {
  if (string !== "") {
    newString += string[string.length - 1];
    return stringReverse(string.slice(0, string.length - 1));
  }
  return newString;
};
// const result = stringReverse("hello");
// console.log(result);

// way 02
// const stringReverse1 = (string = "", cb) => {
//   if (string !== "") {
//     cb(string.charAt(string.length - 1));
//     return stringReverse1(string.slice(0, string.length - 1), cb);
//   }
// };

// let str = "";
// stringReverse1("hello", (value) => (str += value));
// console.log(str);

// way 03
const stringR = (str = "") => {
  if (str === "") {
    return str;
  } else {
    return stringR(str.slice(1)) + str[0];
  }
};

console.log(stringR("hello"));
module.exports = { stringReverse, stringR };
