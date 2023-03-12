"use strict";

/********************************************
           loop
********************************************/
//01 for loop
//02 while loop
//03 do while loop


/********************************************
           for loop  start
********************************************/
// for loop serectucer
/*
for (starting; condition; update) {
    document.write("")
}
*/

//prectics 01 //bangladesh bangladesh bangladesh.......9
// for ( var x = 1; x<10; x+=1) {
//     document.write("Bangladesh" + "<br>");
// }

//prectics 02 // 1 3 5 ....100
// for ( var x = 1; x<100; x+=2) {
//     document.write(" "+ x) ;
// }

//prectics 03// 100 98 96....2
// for ( var x = 100; x>1; x-=2) {
//     document.write(" "+ x);
// }

//prectics 04// 0+1=1, 1+2=3, 3+3=6.......45+10=55
// var tm=0;
// for (var m = 0; m<=10; ++m){
//    tm =tm+m;
// }
// document.write(tm)


//prectics 05// 

// let l = +prompt("Enter the fast Number :");
// let j = +prompt("Enter the lest Number :");
// var tm=0;
// for (var m = l; m<=j; ++m){
//    tm =tm+m;
// }
// document.write(tm);


/********************************************
          while loop  start
********************************************/
// while loop serectucer

/*
starting 
while (condition){
    update
}
*/
// var x =1;
// while( x <= 5){
//     document.write(x)
//     x++;
// }

//task 06
//amon sunka nirnoy je goloke 5 abong 3 dara bag kurle bag ses 0 huy//
// var h=0;
// var k = 1;
// while (k <= 50){
    
//     if(k%3==0 && k%5==0){
//         document.write(k +"<br>")
//         h = h+k;
//     }
//     k++;
// }
// document.write(h);


/********************************************
          do while loop  start
********************************************/
// while loop serectucer

/*
starting
do{
    update
}while(condition)
*/

//praktis 02
// var i = 1; 
// do {
//     document.write(i)
//     i++
// } while (i<=5);


//praktis 02 //condition false hule 1 bar kaj kurbe//
// var i = 11; 
// do {
//     document.write(i)
//     i++
// } while (i<=5);



//Nested inner loop
for(var i=1; i <= 1000; i++) {
    document.write("List Item " + i +"<br>");
    for(var j=1; j<=3; j++){
        document.write("--------------Sub " + j +"<br>");
        for(var m=1; m<=3; m++){
            document.write("--------------------------------Dou " + m +"<br>");
        }
    }
}