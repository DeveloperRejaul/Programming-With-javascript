// Implemant shift mathoth

const arr = [1, 2, 3, 4, 5];
function shift(arr) {
  let firstValue = [];
  for (let i = 1; i < arr.length; i++) {
    firstValue[i - 1] = arr[i];
  }
  return firstValue;
}
const result = shift(arr); // [2,3,4,5]

// javascript defult
const myArr = ['rejaul', 'romjan', 'rakib'];
myArr.shift();
myArr;
