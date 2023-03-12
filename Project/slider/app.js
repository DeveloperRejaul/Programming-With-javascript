
// slider with valina js
const control = document.querySelector(".control");
const container = document.querySelector(".thimline-container");
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlidewidth = 0;

// itemsetap fer slide
reposive = [
    {breaPoint : {width:0, item : 1}},
    {breaPoint : {width:600, item : 2}},
    {breaPoint : {width:1000, item : 4}}
]


function lode() {
    for (let i = 0; i < reposive.length; i++) {
        if (window.innerWidth >= reposive[i].breaPoint.width) {
            items = reposive[i].breaPoint.item
        }
    }
    start()
}

function start() {
    var totalItemsWidth = 0;
    for (let i = 0; i < allBox.length; i++) {
        // width and margin setap items
        allBox[i].style.width = (containerWidth / items) - margin + "px";
        allBox[i].style.margin = (margin / 2) + "px";
        totalItemsWidth += (containerWidth / items);
        totalItems ++
    }
    // thimline-container width setup
    container.style.width = totalItemsWidth + "px";

    // slide control setup
    var allSlide = Math.ceil(totalItems / items)
    var ul = document.createElement("ul");
    for (let i = 1; i < allSlide; i++) {
      const li =  document.createElement('li');
            li.id = i;
            li.innerHTML = i;
            li.setAttribute("onclick", "contolSlides(this)");
            ul.appendChild(li);
            if ( i == 1) {
                li.className = 'active'
            }
    }
    control.appendChild(ul)

}

// when click to number slide to next slide
function contolSlides(ele) {
    // slecet controul  seldren "ul" element
    const ul = control.children;

    // select ul children 'li' element;
    const li = ul[0].children;

    // fine how to active 
    var active;
    for (let i = 0; i < li.length; i++) {
        
        if (li[i].className == "active") {
            // fine who is now active
            active = i;
            // remove active class form all 'li' element
            li[i].className = "";
        }
    }
    // add active class to corunt slide
    ele.className = "active";

    var numb = (ele.id - 1) - active; 
    jumpSlidewidth = jumpSlidewidth + (containerWidth*numb);
    container.style.marginLeft =- jumpSlidewidth + "px";
}


// call function
window.onload = lode()






var click = document.querySelector("button");
var mdiv = document.querySelector("#test div");


var i = 0;

click.onclick = () => {
    i++
    if (i==0) {
        mdiv.style.marginLeft = "100px"
    }
}

