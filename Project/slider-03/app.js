
let section = document.querySelector("section");
let sectionInner = document.querySelector(".innersec");

let press = false;
let startx;
let x;

section.addEventListener('mousedown', (e)=>{
    press = true;
    startx = e.offsetX - sectionInner.offsetLeft;
});

window.addEventListener('mouseup', ()=>{
    press = false
});
section.addEventListener('mousemove', (e)=>{
    if(!press) return;
    e.preventDefault();
    x= e.offsetX;
    var i = sectionInner.style.left = `${x - startx}px`
    chackbundary()
});

function chackbundary() {
    let outer = section.getBoundingClientRect();
    let inner = sectionInner.getBoundingClientRect();
    
    if (parseInt(sectionInner.style.left) > 0) {
        sectionInner.style.left = "0px"
    }
    else if (inner.right < outer.right) {
        sectionInner.style.left = `-${(inner.width - outer.width) - 200}px`
        
    }


}








