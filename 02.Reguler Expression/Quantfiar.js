





/**
 * @Title :quantifier
 * n+
 * n*
 * 
 */

var str = "hh hhh jjjhh jj iihh nnjj ih 12345, 6789"

// n+
var patten  = /j+/gi
var patten2 = /j+h/gi

// n*
var patten3 = /j*h/gi

//n? 
var patten4 = /j*h?/gi

//n{x}
var patten5 = /[0-9]{2}/

//n{x,y}
var patten6 = /[0-9]{1,3}/gi

//n{x,}
var patten7 = /[0-9]{3,}/g


//n$
var patten8 = /9$/g

//^n 
var patten9 = /^h/gi

//n=?
var patten10 = /i=?h/g

// n=!?
var patten11 = /i!?h/g


var result = str.match(patten11)









//log
console.log(result)



