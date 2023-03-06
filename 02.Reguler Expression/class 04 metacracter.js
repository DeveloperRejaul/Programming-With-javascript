/**
* @Title : Matacracter
*1.  
*2.  \
*3. \w 
*4. \W 
*5. \d 
*6. \D 
*7. \s 
*8. \S
*9. \b 
*10. \B 
*11. \t 
*12. \n
*/

// "." metacracter // find a single crarcter acceft new line   or line tarminator

var str = "kat ket kdt keat"

var patten = /k.t/ig
var patten2 = /ke.t/ig
var patten3 = /k..t/ig

var resul1 = str.match(patten3)

//  \ metacracter // \. => skip the next cracter
var str1 = "5.5 566 56 788"
var patten4 = /5.5/ig
var patten5 = /5\.5/ig

var resul2 = str1.match(patten4)


// \w metacracter // find word cractor

var str2 = "my name is rejaul	 karim \n name 	93 83e 3৮3"
var patten6 = /\w/ig

// \W metacracter // return without word cracter
var patten7 = /\W/ig



// \d => return digit cracter
var patten8 = /\d/ig 

// \D => return without digit cracter
var patten9 = /\D/ig

// \s => return whitespace
var patten10 = /\s/g


// \S return without whitespace
var patten11 = /\S/g


// \b => find a match at beginning/end of the word
var patten12 = /\bn/g // word er soro letter ta ki diye soro hube ta er maddome bulte pari
var patten13 =/e\b/g  // word er seser letter ta ki hute hube amra er maddome bulte pari


// \t => find tab cracter 
var patten14 = /\t/g

// \n => find new line cracter 
var patten15 = /\n/




var result3 = str2.match(patten15)
//log
console.log(result3)