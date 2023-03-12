"use strict"

/**********************************************************
                    Function
***********************************************************/
//Stap of function

//01 creating a function
//02 calling a funtion
//03 pass value in funcion
//04 returning a value


//prectice 01
//creating a function
/*function adiution (  ) {
    var num = 5;
    num*=num;
    document.write(num + "<br>")
}
//calling a funtion
adiution (  )
adiution (  )*/


//prectice 02
//creating a function
function adiution ( num ) {
    num*=num;
    document.write(num + "<br>")
}
//calling a funtion
adiution ( 7 )
adiution ( 4 )


//prectice 03
//creating a function
function adiution ( num, num2 ) {
    var result = num*num;
    document.write(result + "<br>")
}
//calling a funtion
adiution ( 7, 3 )
adiution ( 4, 7 )




//returning a value
function addin (x, y) {
    var i = x * y;
    return i;
}
document.write (" Returning value = " + addin(5, 10) + "<br>");

// returning a value 
function addin (x, y) {
    var i = x * y;
    return i;
}
var x = addin (5, 10);
document.write (" Returning value = " + x  + "<br>");


//sub Function
function subtraction ( x,y ) {
    var result = x - y;
    document.write("sub = " + result + ("<br/>"))
}
function sqaure ( x,y ) {
    var result = x * y;
    document.write("sqaure = " + result + ("<br/>"))
}

function add ( x,y ) {
    var result = x + y;
    document.write("add = " + result + ("<br/>"))
}
subtraction(30, 20);
add(30, 20);
sqaure(30, 20)


//es6 new funtion
const Add = (x, y) => {
    let sum = x+y;
    console.log(sum);
}
Add (20, 30);