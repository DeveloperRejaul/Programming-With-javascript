/**
 * @title : Concate Multiple Array
 */

const arr1 = [1,2,3 ]
const arr2 = [4, 5, 6]

// Concate Multiple Array
const arr3 = arr1.concat(arr2)  //way 01
const arr4 = [...arr1, ...arr2]  //way 02
const arr5 = [].concat(arr1,arr2,7,8) //way 03

// log
arr1
arr2
arr3
arr4
arr5