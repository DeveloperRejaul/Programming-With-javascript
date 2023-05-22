/**
 * @param {String} str
 * @description : //todo revers string with out for loop and reverse method
 * @returns {String}
 */

/**
 * @way01 : with recursion function
 */
const reversString = (str = "") => {
  if (str === "") {
    return "";
  } else {
    return reversString(str.substring(1)) + str.charAt(0);
  }
};
// const newString = reversString("hello");
// console.log(newString);

/**
 * @way01 : with recursion function
 */
const reversString1 = (str = "") => {
  //   const newArr = [];
  let strLength = str.length - 1;
  let newString = "";
  const arr = str.split("");
  arr.forEach((e, i) => {
    // newArr[arr.length - i] = e;
    newString += str[strLength - i];
  });

  //   return newArr.join("");
  return newString;
};
const newString1 = reversString1("hello world");
console.log(newString1);
