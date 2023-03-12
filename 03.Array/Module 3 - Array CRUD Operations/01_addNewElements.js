/*
* @Title Add new Elements
*/

// use push to insert at the end
const arrp1 = [1,2,3]
const arrp2 = [8, 9]

arrp1.push(4, 5) // add new value end side

// add other arr
arrp1.push(arrp2) // create chield arr // this is problems
arrp1.push(...arrp2) // with out chield arr // solition 01
Array.prototype.push.apply(arrp1, arrp2)// with out chield arr // solition 02

arrp1



// use unshift to insert at the begining arr
const arrU1 = [5,6]
const arrU2 = [3,4]

arrU1.unshift(1, 2)// add new value start side

// add other arr
arrU1.unshift(arrU2) // create chield arr // this is problems
arrU1.unshift(...arrU2) // with out chield arr // solition 01
Array.prototype.push.apply(arrU1,arrU2)// with out chield arr // solition 02

arrU1


// Use Splice to incert at the givent index

// splice(startingPoint,deletCount,AddArrValue)
const arrS1 = [1, 2, 3, 6, 7, 8, 9]
const arrS2 = [5]

arrS1.splice(3, 0, 4) // add new value

// add other arr
arrS1.splice(3, 0, arrS2) // creating Chails arr // this is problems
arrS1.splice(3, 0, ...arrS2) // creating Chails arr // this is Sulition

arrS1

