"use strict";

let num01 = prompt("Enter your Fast Number :");
let num02 = prompt("Enter your Fast Number :");

// /**************************************************
//     string teke number e convart start
// ****************************************************/
//Rull 01
num01 = +num01;
num02 = +num02;

// //Rull 02
// num01 = Number(num01);
// num02 = Number(num02);

// //Rull 03
// num01 = (Number(num01));
// num02 = (Number(num02));

// //Rull 04 // ey rull e dosomik kaj kurbena
// num01 = parseInt(num01, 10);
// num02 = parseInt(num02, 10);

// //Rull 05
// num01 = parseFloat(num01, 10);
// num02 = parseFloat(num02, 10);

// /**************************************************
//     string teke number e convart end
// ****************************************************/





// /**************************************************
//     ek sate odik variavle neoyar niom stert
// ****************************************************/

let sum, sub, div, into, per;

// /**************************************************
//     ek sate odik variavle neoyar niom end
// ****************************************************/




// /**************************************************
//         +, _, /, *, %, kurer niom start
// ****************************************************/

sum = (num01 +  num02);
document.write( num01 + "+" + num02 + "=" + sum + "<br/>");

sub = num01 - num02;
document.write( num01 + "-" + num02 + "=" + sub + "<br/>");

div= num01 / num02;
document.write( num01 + "/" + num02 + "=" + div + "<br/>");

into= num01 * num02;
document.write( num01 + "*" + num02 + "=" + into + "<br/>");

per= num01 % num02;
document.write( num01 + "%" + num02 + "=" + per + "<br/>");

/**************************************************
        +, _, /, *, %, kurer niom ends
****************************************************/

/**************************************************
        Daynamic Calculator
****************************************************/
// let num = 0;
// let num01 = 0;
// while (true) {
//   let  pcal = +prompt("Enter Number :")
//     if (!pcal) {
//        break;
//     }

//     num = (num + pcal);


// }


// sub = sub - pcal;

document.write(num +"<br/>");
document.write(num01);w