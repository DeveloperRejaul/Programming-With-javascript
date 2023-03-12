

// .toString()   ===== number ke string e Convert kurbe

let num = 100;
let sNum = num.toString();
console.log(typeof sNum);


// .toExponential() =======  eyta e to thi power er kaj kure

let x = 99.284;

let y = x.toExponential(2)
console.log(y)


// .toFixed() ======= eyta dosomiker pure kuyta takbe ta difint kure dey

var q = 12.987465;

var w =q.toFixed()
console.log(w)

var w =q.toFixed(2)
console.log(w)


var w =q.toFixed(10)
console.log(w)

// .toPrecision() ======= eyta diye total number of length difine kura huy

var num1 = 12.34523;

console.log(num1.toPrecision())
console.log(num1.toPrecision(3))




// .toNumber() ======= can be used to convert JavaScript variables to numbers

var i = 12;

console.log(Number(true)) ;          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN 






// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:


console.log(Number(new Date("1970-01-01"))) // This returns 0:


console.log( Number(new Date("1970-01-02"))) // This returns 86400000





// .parseInt() Method === parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

    parseInt("-10");        // returns -10
    parseInt("-10.33");     // returns -10
    parseInt("10");         // returns 10
    parseInt("10.33");      // returns 10
    parseInt("10 20 30");   // returns 10
    parseInt("10 years");   // returns 10
    parseInt("years 10");   // returns NaN  


// parseFloat() Method ===== parses a string and returns a number. Spaces are allowed. Only the first number is returned:

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN 




// .MAX_VALUE ======== returns the largest possible number in JavaScript.
 var num2 = Number.MAX_VALUE;

console.log(num2);

// MIN_VALUE ======= returns the lowest possible number in JavaScript.
var num3 = Number.MIN_VALUE;
console.log(num3);








