"use strict"

/****************************************************
                DOM selector
 ****************************************************/
// getElementById  selector 
document.getElementById("hadding").innerHTML = "Hello";

// getElementByTagName  selector 
document.getElementsByTagName("h1")[0].innerHTML = "I'm Rejaul karim";

// getElementById  selector 
document.getElementsByClassName("p-tag")[0].innerHTML = "I am peragrap";

// querySelector  selector 
document.querySelector(".p-tag").innerHTML = "I am peragrap 02"
document.querySelector("#hadding").innerHTML = "Hello 02"
document.querySelector("h1").innerHTML = "I'm Rejaul karim 02"
document.querySelector("ul li a").innerHTML = "Hey 02"

// querySelectorAll  selector 
document.querySelectorAll("ol li")[1].innerHTML = "Changed"




