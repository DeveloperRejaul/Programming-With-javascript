// Reguler expression e bes kuyekti mathod and falg royece

/*
// mathods

2. search() // return position of the matched index // note matched return -1
3. replace() // eyti 2ta pera mitar ney, protom ti hulo kon word ke replace kurbo, ditioti hulo kidara replace korbo.
4. exec() // eyti data String e search kura huy,  ey mathod er modde ekti expression ba string deoya huy, judi oy string ti take tayle se array return kurbe, judi na kate tahule null return returnretu kube.
4. match() // eyti data String e search kura huy,  ey mathod er modde ekti expression ba string deoya huy, judi oy string ti take tayle se array return kurbe, judi na kate tahule null return returnretu kube.
5. test() // eti bolian value return kure, judi match huy true, na hule false.
6. split() // eyti katar junno bebohar kura huy, paramitare kico nadile protekti word ke dore dure katbe. judi kiso deoya huy tahule oy value dara katbe.

//plags
1. i (case sencitibe ta ignor kurbe)
2. g (poro line kaz kurbe)
3. m (malti line kaz kurbe)
*/



// prectice matched

// search matched
var str = "my name is rejaul karim"
var result1 = str.search("is")

// replace mathods
var result2 = str.replace("rejaul karim", "kamal mia")

// exec mathod
// var result3 = str.exec("is")

//match mathod
var result4 = str.match("is")

// test mathods
//var result5 = str.test("is")

// split mathods
var result6 = str.split(" ")


// log
//console.log(result1)
//console.log(result2)
//console.log(result3)
//console.log(result4)
//console.log(result5)
//console.log(result6)




// practice plags

var str = "My name is rejaul karim.\n I'm 22 years old.\n I'm a student in Hounrs."



// i plags
var patten1  = /m/i
var plagI = str.match(patten1)

// g plag 
var patten2 = /m/g
var plagG = str.match(patten2)

//m plag 
var patten3 = /m/g
var plagM = str.match(patten3)

//log
//console.log(str)
//console.log(plagI)
//console.log(plagG)
console.log(plagM)