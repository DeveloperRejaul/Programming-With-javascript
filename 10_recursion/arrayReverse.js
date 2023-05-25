// Way 01
const newArr = [];
const arrR = (arr = []) => {
  if (arr.length !== 0) {
    newArr.push(arr[arr.length - 1]);
    arrR(arr.slice(0, -1));
    return newArr;
  }
};
console.log(arrR([1, 2, 3])); // result : [ 3, 2, 1 ]

const arrR2 = (arr = []) => {
  if (arr.length == 0) {
    return [];
  } else {
    return [arrR2(arr.slice(1))].concat([arr[0]]).flat();
  }
};
console.log(arrR2([1, 2, 3])); // result : [ 3, 2, 1 ]
