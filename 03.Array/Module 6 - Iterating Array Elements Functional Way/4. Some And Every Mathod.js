/**
 * @Title : Some And Every Mathod
 * Roles : Some And Every => eder conditional data rendaring er junno bebohar kura huy // ey 2ti mathod bolian data return kure
 *
 * Some: Kukun bebohar kurbo ?
 * ans: 1. judi ekti data  o na take ta hule se kettere false return kurve,
 *      2. judi jekono ekti condition true huy , ta hule se true return kurbe
 *
 * Every: Kukun bebohar kurbo ?
 *       1. eykane sobgolo condition sutto hute hube , than true return kurbe
 *       2. judi sutto na huy tayle False return kurbre
 */

let prodactReview = [
  {name: 'rejaul', response: 'positive', rating: '5'},
  {name: 'kamal', response: 'positive', rating: '4'},
  {name: 'jamal', response: 'positive', rating: '3'},
  {name: 'Raahim', response: 'negative', rating: '3'},
  {name: 'Kibriya', response: 'negative', rating: '3'},
];

// Every
const positave = prodactReview.every(value => value.rating >= 3);
// console.log(positave);

// Implemantation Evary mathod
function myEvery(arr, cl) {
  for (let i = 0; i < arr.length; i++) {
    const data = cl(arr[i], i, arr);

    if (!data) {
      return false;
    }
  }
  return true;
}
const positave1 = myEvery(prodactReview, value => value.rating >= 3);
// console.log(positave1);

// Start Some mathod Code
let testRunInASingleMatch = [
  {
    name: 'rejeul',
    rung: 374,
  },
  {
    name: 'kamal',
    rung: 380,
  },
  {
    name: 'Romjan',
    rung: 375,
  },
  {
    name: 'Rana',
    rung: 400,
  },
];

// Some
const atlistOne = testRunInASingleMatch.some(value => value.rung >= 400);
// console.log(atlistOne);

// Implemantation Some Mathod

function mySome(arr = [], cl) {
  for (let i = 0; i < arr.length; i++) {
    const result = cl(arr[i], i, arr);
    if (result) {
      return true;
    }
  }
  return false;
}
const someResult = mySome(testRunInASingleMatch, value => value.rung >= 500);
console.log(someResult);
