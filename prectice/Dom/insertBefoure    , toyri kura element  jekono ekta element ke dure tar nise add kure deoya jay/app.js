
// select
var div = document.querySelector('div')
var hadd = document.querySelectorAll('div h1')[2];


// create element
var h1 = document.createElement("h1");


// add content
h1.textContent="hello"





// insertBefore
div.insertBefore(h1, hadd);