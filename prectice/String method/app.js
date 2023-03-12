
// String Methods


// length propaty
let tex = "NEW STRING"
console.log(tex.length)



// .slice() Method ----------(note : eyta diye moloto kono ekta string ke kata huy)

    // .slice(start,end)
    let str = "apple bannena que";
    console.log(str.slice(5, 13)); //retarn bannena

    // chayle - diyeo kate nite pari
    let stl = "apple bannena que";
    console.log(stl.slice(-11, -5));

    // chayle ek kop diyeo kete nite pari
    let stx = "apple bannena que";
    console.log(stx.slice(5));



// .substring() Method ----------(note : eyta diye o slice er moto kaj kure but // but eyta te - value kaj kure na)

        // .substring(start,end)
        let ste = "apple bannena que";
        console.log(ste.slice(5, 13)); //retarn bannena



// .substr() Method ----------(note : eyta diye o string ke kata huy // 2ta peramitar er mudde 1ta hube kuto teke kata soro hube. and 2s peramiter ta hube kotay giye ses hube)

    // .substr(start,length)
    let sty = "apple bannena que";
    console.log(sty.substr(6,7)); //retarn bannena


// .replace() Method ----------(note : eyta diye string kr replace kura huy----eykane 1st peramitar ta hube kake replace kurbo , 2nd peramiter ta hube ki diye reples kurbo)

    var text = " I love Sakina" ;
        var zri = text.replace("Sakina", "Zarina") ;//retarn Zarina
        console.log(text);
        console.log(zri);

    // ekuy string judi 2er odik take ta hule 1st ta replace hube
    var text = " I love Sakina and Sakina" ;
        var zri = text.replace("Sakina", "Zarina") ;//retarn Zarina and Sakina
        console.log(text);
        console.log(zri);


// .toUpperCase() Method ----------(note : eyta method diye string ke boro hater banano huy)

    var srtinhg = "My Name is raja Ul kaRim"
    console.log(srtinhg.toUpperCase())


// .toLowerCase() Method ----------(note : eyta method diye string ke choto hater banano huy)
    var srtinhg = "My Name is raja Ul kaRim"
    console.log(srtinhg.toLowerCase())




// .concat() Method ----------(note : eyta method diye  joda laganohuy // eykane 1st peramitar e likte hube ki diye joda lagabo , 2nd peramitar e likte hube kake joda lagabo )
    var text01 = "Hello";
    var text02 = "Warld";

    var teXt = text01.concat(" + ", text02);

    console.log(teXt);


// .trim() Method ----------(note : eyta method diye  string er dane and bamer otirikto spas golo remove kura huy)


var rem = "             reja ul      karim                  ";

console.log(rem);       //retarn (             reja ul      karim                  )


console.log(rem.trim());       //retarn (reja ul      karim)




// .padStart() Method ----------(note : eyta method diye string er sorote value jog kura huy (000 --- eyrokom  jog hube ) 1st peramitar er mudde hube kuyta jog kurbo ,2nd tate hube ki jog kurbo


let pad = "5";
var padSTrart = pad.padStart( 4, 0); 
console.log(padSTrart);  //retarn 0005

// .padEnd() Method ----------(note : eyta method diye string er sesr dike value jog kura huy (000 --- eyrokom  jog hube ) 1st peramitar er mudde hube kuyta jog kurbo ,2nd tate hube ki jog kurbo

    var paX = "5";
    var padSTrart = pad.padEnd( 4, 0);
    console.log(padSTrart);  //retarn 5000




// .charAt() Method ----------(note : eyta method diye string kono ekta crecter ke niye asa huy) //pera mitar er mudde index number er mammume  bule dite huy je ami kon kon cracter ke cacci

let hadh = "hello world";

console.log(hadh.charAt(6)); //retern  ----- w



//  string propaty access

    let kal = "Hello world"
    let kax = kal[2];
    console.log(kax); //retern ---- l





// .split() Method ----------(note : eyta method diye string ke erry te covert kura huy) peramitar er mudde ki diye diye katte hube seta bule dite hube // jemo (" ") , (",")

    let split = "Hello World";
    var splet = split.split("");
    console.log(splet);

    var splet = split.split(",");
    console.log(splet);

    var splet = split.split(" ");
    console.log(splet);


//.valueOf() Method ----------(note : ey method diye variable er value ke retarn kurbe ) and atring hisabe retarn kurbe



    var value = "hello Woeld"
    var input = value.valueOf()

    console.log(input)


