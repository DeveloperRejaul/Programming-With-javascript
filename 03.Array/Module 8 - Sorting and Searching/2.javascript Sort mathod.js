/**
 * @Title : Undersrtanding javascript Sort Mathod.
 */

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// numbers.sort(); // js sort is mutubal // orginal array ke modify kurbe

// number sort
let sorteNumbers = numbers.sort((a, b) => {
  return a - b;
});

// string sort
let strings = ['apple', 'cat', 'Ball', 'Apple'];

strings.sort((a, b) => {
  a = a.toLocaleLowerCase();
  b = b.toLocaleLowerCase();

  if (a > b) return 1;
  if (b > a) return -1;

  return 0;
});

strings;

// Sort Object
const team = [
  {id: 3, name: 'kamal'},
  {id: 1, name: 'rejaul'},
  {id: 2, name: 'romjan'},
  {id: 4, name: 'jamal'},
  {id: 5, name: 'Rohim'},
];

// Sort by Id
team.sort((a, b) => {
  if (a.id > b.id) return 1;
  if (b.id > a.id) return -1;
  return 0;
});

// sort by name
team.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
});
