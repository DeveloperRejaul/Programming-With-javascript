/**
 * @Title : babul sort implement with call back function
 */

const team = [
  {id: 3, name: 'kamal'},
  {id: 1, name: 'rejaul'},
  {id: 2, name: 'aomjan'},
  {id: 4, name: 'jamal'},
  {id: 5, name: 'Rohim'},
];
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const bubbleSort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cb(array[j], array[j + i]) > 0) {
        let temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

// Numbers Sort
bubbleSort(numbers, (a, b) => b - a);
console.log(numbers);

// object Sort
// sortd by id
bubbleSort(team, (a, b) => a.id);
console.log(team);

// // sorted by name
// bubbleSort(team, (a, b) => {
//   if (a.name > b.name) return 1;
//   if (b.name > a.name) return -1;
//   return 0;
// });
// console.log(team);
