/**
 * @Title :ForEach vs For Loop //ForEach Implement
 *
 *  Map vs forEach :
 *  Map: map array ke itarate kure noton akti array return kure  // ortat noton akti variable valuo golo phus kure , then se value ta return kure
 *  forEach: forEach sodo Mattoro itaratig ar kaz kure.
 *
 *  Kukun ForEach ar kukun Map use kurbo ?
 *      Map: amra jukon kono array ke itarete kure noton ekta Variable ar mudde data rakte caybo tukon map babohar kubo.
 *      Example: const newData = arr.map((value)=>value)
 *
 *      ForEach: sodo mattoro itarating ar kazta kure ,like oporer Example ta judi ForEach diye kuri .
 *      Example :
 *      let newData = []
 *      arr.forEach((value)=>{newData.push(value)})
 *
 */

let name = ['Rejaul', 'kamal', 'Jsmal', 'Romjsn'];

// How To Do  it On For Loop
for (let i = 0; i < name.length; i++) {
  //   console.log(name);
}

for (let i = 0; i < name.length; i++) {
  //   console.log(name[i]);
}

// Itarating Logic vs Business Logic

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

function Log(value) {
  //   console.log(value);
}

function Logic(value, index, arr) {
  //   console.log(value, index, arr);
}

reuse([1, 2], Log);
reuse(['one', 'Tow ', 'three'], Logic);

// ForEach Implement
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function myForEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
}

let sum = 0;
myForEach(numbers, function myFunc(value) {
  //   sum += value;
});
console.log(sum);

myForEach(numbers, function myFunc(value, index) {
  //   console.log(`Index=${index}: Value=${value}`);
});

// Official ForEach
numbers.forEach((value, index) => {
  console.log(`Index=${index}: Value=${value}`);
});
