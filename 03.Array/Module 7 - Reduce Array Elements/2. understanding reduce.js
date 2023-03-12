/**
 * @Title : Antome Of reduce  mathod
 *
 * Reduce e => 1. Final result hube accomolator
 *             2. index hube curent value
 *             3. judi function call er sate ',' kono value diye takle seta hube accomonator er value // judi na di tayle array er 1st elemant ke accomolator hisabe dure nibe
 *
 */

// Accomulate - gather together or acuire an increasing number of quantity of array

let numbers = [1, 2, 3, 4, 5];

// Implemaning Sum

function sumFunc(accomulator, currentValue, index) {
  console.log(`Acc: ${accomulator} - Cur ${currentValue} - Index: ${index}`);
  return accomulator + currentValue;
}
const sum = numbers.reduce(sumFunc, 10);
console.log(sum);
