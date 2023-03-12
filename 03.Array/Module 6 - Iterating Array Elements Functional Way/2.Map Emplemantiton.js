/**
 * @Title : Map Mathod Impemantation
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

const names = [
  'stack larner',
  'stack school',
  'stack consultancy',
  'stack solution',
  'stack tech',
];

// Extract Langth - [13,12,17,14,10]
//Get UperCase  Version =[ 'STACK LERNER', 'STACK SCHOOL', 'STACK CONSOTANCY', 'SACK SOLISION', 'STACK TECH']
// Get Sliced Vertion - [  'larner','school',  'consultancy',' solution','tech']

// We have resume Function
function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

// Example One
const result1 = [];
reuse(names, value => {
  result1.push(value.length);
});
// console.log(result1);

// Example Tow
const result2 = [];
reuse(names, value => {
  result2.push(value.toLocaleUpperCase());
});
// console.log(result2);

// Example Tow
const result3 = [];
reuse(names, value => {
  result3.push(value.substr(6));
});
// console.log(result3);

/**
 * @Title : Map Imaplemantation with  custam function
 * @param {Array} arr
 * @param {Function} logic
 * @returns
 */
function reuseAndMap(arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i], i, arr));
  }
  return result;
}

// Our Custom Map
const length = reuseAndMap(names, value => value.length);
const UperCase = reuseAndMap(names, value => value.toLocaleUpperCase());
const Sliced = reuseAndMap(names, value => value.substring(6));

// console.log(length);
// console.log(UperCase);
// console.log(Sliced);

// JavaScript Defult Map
const length1 = names.map(value => value.length);
const UperCase1 = names.map(value => value.toLocaleUpperCase());
const Sliced1 = names.map(value => value.substring(6));

// console.log(length1);
// console.log(UperCase1);
// console.log(Sliced1);

// Project
const studentArray = [
  {id: 1, name: 'Rejaul', gpa: 3.45, Email: 'mail1@gamailcom'},
  {id: 2, name: 'Romjan', gpa: 2.45, Email: 'mail2@gamailcom'},
  {id: 3, name: 'Jamal', gpa: 4.45, Email: 'mail3@gamailcom'},
  {id: 4, name: 'Kamal', gpa: 6.45, Email: 'mail4@gamailcom'},
  {id: 5, name: 'Shifat', gpa: 1.45, Email: 'mail5@gamailcom'},
];

const mapedStudent = studentArray.map(value => {
  return {
    ...value,
    title: `hello ${value.name} - your result have been publish`,
    msg: `hello ${
      value.name
    } Your result have been Published and you have got ${value.gpa} You have ${
      value.gpa >= 3 ? 'passed' : 'Failed'
    } `,
  };
});

// console.log(mapedStudent);
