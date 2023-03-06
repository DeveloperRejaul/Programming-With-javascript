

/*
@Title : Brackets Expression

// []
// ()
===============================================
1. [ABC] fine any cracter Between the Brackets
2. [^ABC] Fine any cracter not Between the Bracket
3. [0-9] fine any number cracter Between the Brackets
4. [^0-9] fine any number cracter not Between the Brackets
===============================================
1.(x|y) fine any of the alternative and specific

*/
var str = "my name is rejaul karim 3 8 65 karimb"

// []
var patten = /[abc]/g
var patten2 = /[^abc]/g
var patten3 = /[0-9]/g
var patten4 = /[^0-9]/g


var result1 = str.match(patten4)

// (x|y)

var str2 = "hello"

var patten5 = /(h|l)/g

var result2 = str2.match(patten5)



//log
console.log(result2)



