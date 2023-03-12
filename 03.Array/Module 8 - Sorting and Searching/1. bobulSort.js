/**
 * @Title :Implemant Bubble sort
 */

let myarr = [1, 2, 5, 13, 15, 48, 3, 185, 31, 854, 12, 857, 35];

const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};
bubbleSort(myarr);

console.log(myarr);
