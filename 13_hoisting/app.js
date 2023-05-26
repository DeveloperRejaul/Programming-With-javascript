/**
 * @Title : What is hoisting ?
 * !! hoisting molotu variable declaration, value assignment, code formatting js compiler , compiler behavior er sate oto poto babe judito
 * @kokon_hoisting_huy ?
 * 1. jokon kono variable ke age bebohar kure pore dekliar kura huy
 * like: count = 0
 * var count;
 *
 * 2. jokon kono variable ke age dicliar kure huy and pore ta bebohar kura huy, tokon o huy
 * Like : var count ;
 * count = 0
 *
 * @note : hoisting moloto amra var er sate lokko kuri .
 * but let and const er sateo huye take,
 * kinto let er somoy reference error dey , jay karone hoisting deki na, ba bebohar kurte parina;
 * and const er sate sintext error dey.
 *
 */
//TODO var
//!! Example: o1 //TODO: All ok
// var count;
// count = 5;
// console.log(count);

//!! example: 02
// num = 10;
// var num;
// console.log(num); // print 10 !! How to do this

//!! Explant execution // compiler what do the backend??????
// var num;
// num = 10;
// console.log(num);

//!! soja kuta javascript compiler protome variable declaration er kaz kure than assignment er kaz kure

//TODO Let
//!!example :03
// let num;
// num = 10;
// console.log(num); // print 10 All ok

// But // !!ReferenceError: Cannot access 'num2' before initialization //Why????
// num2 = 10;
// let num2;
// console.log(num2);

// Ans : jokon js compiler variable goloke execution kurar age top lable e niye jay,
// tolon se var er kettere variabler er sate unsifted set kure dey  ,
// jar karone memoryte jayga niye nay, e jonno var er kettere kono problem huy na,

// !!kinto let ke jokon top lable e niye jay tokon undefined value set kurena.
// jar ka  mamory te tar junno jayga boraddo huy na,
// poro bortite jukon oy variable e jukon kono value assign kura huy
// tokon se kotay assign kurbe jayga koje pay na ,
// jar karone refrence error dey

//TODO const
// const er ketter sintext error dey ,
//  karon const er kettere ey babe code lika jay na, likle sintext lekata vol huy,
// ey junno eyta age prirnt kure dy
