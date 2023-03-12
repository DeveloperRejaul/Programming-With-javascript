

const text = document.querySelector('#text');
const number = document.querySelector('p');


// add eveent lesinner
text.addEventListener("keypress", eVent)



// creat funtion
var count = 0;
function eVent(e) {
    count++
    var con = e.key;
    number.innerHTML = `You have pressed ${count}`
}


