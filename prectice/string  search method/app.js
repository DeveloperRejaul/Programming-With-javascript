// String Search Method

    // .indexOf() Method ----------(note : eyta diye string ke search kure huy) note: judi string koje na pay te hule -1 reatarn kurbe // abong case sendetib
    var str = "my name is rejaul krim"

    var reja = str.indexOf("rejaul");
    console.log(reja); //reatern 11

    var reja = str.indexOf("reZaul");
    console.log(reja); //reatern -1


// .lastIndexOf() Method ----------(note : eyta diye o string ke search kure huy) // eyta string er last index ke kojbe // and cyle 2nd peramitere stard teke kuto number index porjunto oparetion calabo ta o bule deoya jay
    var str = "my name name is rejaul krim"

    var reja = str.lastIndexOf("name");
    console.log(reja); // retarn 8


    var reja = str.lastIndexOf("name", 7);
    console.log(reja); // retarn 3



// .search() Method ----------(note : eyta diye o string ke search kure huy) // eyta te regolar expretion bebohar kura jay // but er oporer golote bebohar kura jay na

    var str = "my name name is rejaul krim"

    var reja = str.search("name");
    console.log(reja); // retarn 8  //


// .match() Method ----------(note : eyta diye o string ke search kure huy) // eytar peramiter e dite hube rigolar expretion or string o deoya jabr // and ey method retarn kurbr arre akare

    var str = "my name name is rejaul krim"

    var reja = str.match(/na/g);
    console.log(reja); // retarn -- na na // karon amar string e 2ta na ace // arre

    var str = "my name name is rejaul krim"
    var reja = str.match("is");
    console.log(reja); // retarn -- is // arre




// .includes() Method ----------(note : eyta diye o string ke search kure huy) // eyta diye moloto ey string ta ace kina call kura huy// judi take true retarn kurne //na takle false retarn kurbe

    var str = "my name name is rejaul krim"

    var reja = str.includes("is");
    console.log(reja); // retarn true
    
    var str = "my name name is rejaul krim"
    var reja = str.includes("iS");
    console.log(reja); // retarn false
    
    var str = "my name name is rejaul krim"
    var reja = str.includes("is",15 ); //15 number index er por se koja soro kurbe
    console.log(reja); // retarn false


// .startsWith() Method ----------(note : eyta diye o string ke search kure huy) eykane peramitar er mudde kon string diye soro huyce seta like deoya takbe // judi seta pay tayle true retarn kurbe // na payle false retarn kuarbe

    var str = "my name name is rejaul krim"

    var reja = str.startsWith("is");
    console.log(reja); // retarn false


    var str = "my name name is rejaul krim"

    var reja = str.startsWith("my");
    console.log(reja); // retarn true

    var str = "my name name is rejaul krim"

    var reja = str.startsWith("is" ,13 ); // 13 dara se kon index number teke soro kurbe ta bule deoya huyece
    console.log(reja); // retarn true



// .endsWith() Method ----------(note : eyta diye o string ke search kure huy) //peramitar er mudde je index na string  ta like deoya takbe ta dera ses huyce kina chack kurbe

    var str = "my name name is rejaul krim"

    var reja = str.endsWith("is", 16);  // 16 number index e is dara ses huyce kina chack kurbe
    console.log(reja); // retarn false

    var str = "my name name is rejaul krim"
    var reja = str.endsWith("is", 15);  // 15 number index e is dara ses huyce kina chack kurbe
    console.log(reja); // retarn true

