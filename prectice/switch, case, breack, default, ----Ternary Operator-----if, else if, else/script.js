"use strict"

let letter = prompt("Enter Your Letter :")
letter = letter.toLowerCase();

/**********************************************************
               if, else if, else er bebohar
***********************************************************/
/*
if (letter == "a"){
    document.write("vowel");
}
else if (letter == "e"){
    document.write("vowel");
}
else if (letter == "i"){
    document.write("vowel");
}
else if (letter == "o"){
    document.write("vowel");
}
else if (letter == "u"){
    document.write("vowel");
}
else {
    document.write("consonent");
}*/
 
/**********************************************************
               ternary operator er bebohar
***********************************************************/
/* let rejult = (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "o" ) ? "Vowel" :"Consonent";
document.write(rejult);*/

var number = +prompt("Enter a Number :");
var result = number>0?"positive":number<0?"Nagative":number==0?"Zero":"Not a Number";
alert(result);

/**********************************************************
                  Switch er bebohar  
***********************************************************/
//switch, case, break, default

/*switch(letter){
    case ( "a"):
    document.write("Vowel") ; break
    case ( "e"):
    document.write("Vowel") ; break
    case ( "i"):
    document.write("Vowel") ; break
    case ( "o"):
    document.write("Vowel") ; break
    case ( "u"):
    document.write("Vowel") ; break
    default :
    document.write("Consonent") ;
}*/
switch(letter){
    case ( "a"):
    case ( "e"):
    case ( "i"):
    case ( "o"):
    case ( "u"):
    document.write("Vowel") ; break
    
    default :
    document.write("Consonent") ;
}