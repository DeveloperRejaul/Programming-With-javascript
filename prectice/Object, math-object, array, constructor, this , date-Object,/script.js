"use strict"

/****************************************************
                         Object
 ****************************************************/
//How to create an object
//How to print the value of an Object
//Adding a constructor
//Adding function inside a constructor



//How to create an object
// var student  = {
//     name : "Rejaul",
//     age : 22,
//     cgpa : 3.92,
//     language : ["Bangali", "Hindi", "Engish"]
// }

//How to print the value of an Object
// console.log(student.language);
// console.log(student.language[0]);

//Adding a constructor
// function student(name, age, cgpa, language) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.language = language;
// }

// var student01 = new student("Rejaul", 22, 3.92, ["Bangali", "Hindi", "Engish"] );
// var student02 = new student("Rahul", 22, 3.92, ["Bangali", "Hindi", "Engish"] );
// var student03 = new student("Kamal", 22, 3.92, ["Bangali", "Hindi", "Engish"] );

// document.write(student01.name + "<br>");
// document.write(student03.age + "<br>");
// document.write(student02.language + "<br>");


//Adding function inside a constructor
// function student(name, age, cgpa, language) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.language = language;

//     this.display = function () {
//         document.write(this.name)
//         document.write(this.age)
//         document.write(this.cgpa)
//         document.write(this.language)
//     }

// }

// var student01 = new student("Rejaul", 22, 3.92, ["Bangali", "Hindi", "Engish"] );
// var student02 = new student("Rahul", 22, 3.92, ["Bangali", "Hindi", "Engish"] );
// var student03 = new student("Kamal", 22, 3.92, ["Bangali", "Hindi", "Engish"] );


// student01.display()
// student02.display()
// student03.display()





/****************************************************
                    Math Object
 ****************************************************/
// console.log(Math.sqrt(25));
// console.log(Math.abs(-5));
// console.log(Math.sin(2));
// console.log(Math.pow(6, 7));
// console.log(Math.floor(2.4));
// console.log(Math.floor(2.8));
// console.log(Math.ceil(2.8));
// console.log(Math.round(5.8));
// console.log(Math.round(5.4));
// console.log(Math.round(5.5));
// console.log(Math.max(5, 383, 400, 26));
// console.log(Math.random()*6+1);


// let nums = new Array();
// for(let i = 0; i < 5; i++) {  
//     nums[i] = +prompt("Enter The Any Number :");

//     var maximum = Math.max(nums[i]);
// }
// document.write(maximum);





// let nums = new Array();
// var i = 0;
// while(true) {
//     nums[i] = prompt("Enter The Any Number :");

//     if(!nums[i]){
//         break;
//     }

//     var maximum = Math.max(nums[i]);

//     i++
// }
// document.write(maximum);





// Guessing Game

// Guess a Number form 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches rendom number ; then show message won else lost
// Run the Game for 5 time
// Show the Number of won and lost


// Guess a Number form 1 to 5
// var GuessNumbe = +prompt("Enter a Number Form 1 to 5 : ");

// Generate a random number between 1 to 5
// var remdomNumber = Math.floor(Math.random()*5)+1;


// If the guess number matches rendom number ; then show message won else lost

// wya 01
// if(GuessNumbe == remdomNumber) {
//     console.log("You have won")
// } else{
//     console.log("You have lost");
// }

// wya 02
// var rejult;
// console.log ( rejult = (GuessNumbe == remdomNumber ) ? "You have won" : "You have lost. Ramdom Number was " + remdomNumber);


// Run the Game for 5 time


// var numOfWin = 0;
// var numOflost = 0;
// for(var i = 0 ; i <= 5; i++){
//     var GuessNumbe = +prompt("Enter a Number Form 1 to 5 : ");
//     var remdomNumber = Math.floor(Math.random()*5)+1;
//     if(GuessNumbe == remdomNumber){
//         console.log("You have won");
//         numOfWin++ ;
//     }else{
//         console.log("You have lost. Ramdom Number was " + remdomNumber );
//         numOflost++ ;
//     }
// }
// document.write(`You have total won ${numOfWin} <br>`);
// document.write(`You have total lost ${numOflost}`);





// Criating Date Object
var date = new Date();

var day = date.getDay()
console.log(day)

var munth = date.getMonth()
console.log(munth)

var year = date.getFullYear()
console.log(year)

var time = date.getTime()
console.log(time)





