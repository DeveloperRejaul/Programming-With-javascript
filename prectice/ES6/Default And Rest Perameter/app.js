// Dufult and Rest pera mitar 



// defult peramitar 

//(defult peramitar  hulo user judi kono value na dey tokon ulternativ er junno ja kono kiso show kurar junno eyta bebu har kura huy)
// jemon eykane ( = "Hello this Defult perametaar") ta hulo defult perametar
function messafe(text = "Hello this Defult perametaar") {
    

    console.log(text);
};

messafe() // eytar junno defult perametar show kurbe
messafe("I love js")




// Rest pera mitar 
// judi onek velue peramitare pass kurte huy tokon molotu Rest perametar use kura taki ( jemon ey kane {...z} hulo Rest perameter )
function sum (x,y , ...z){


    console.log(` X= ${x}, Y = ${y}, Z = ${z}`)
}
sum( 10, 20, 30, 40, 50, 60, 70, 80 ,90)















