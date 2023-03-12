var span = document.querySelectorAll("span");
var section = document.querySelector("section")
var div = document.querySelectorAll("div");
const containerWidth = section.offsetWidth;
var items = 0;
var margin = 20;


reposive = [
    {breaPoint : {width:0, item : 1}},
    {breaPoint : {width:600, item : 3}},
    {breaPoint : {width:1000, item : 5}}
]

function lode() {
    for (let i = 0; i < reposive.length; i++) {
        if (window.innerWidth >= reposive[i].breaPoint.width){
            items = reposive[i].breaPoint.item
        }
    }
    for (let i = 0; i < div.length; i++) {
        div[i].style.minWidth = ((containerWidth / items) - margin) + "px";
        div[i].style.margin = (margin / 2) + "px";
    }
    nextPrevFunc()

}


function nextPrevFunc() {
    var l = 0;
    span[1].onclick = ()=> {
        l++;
        for (var i of div) {
            if (l==1) {i.style.left = -(containerWidth / items)*0 + "px";}
            if (l==2) {i.style.left =  -(containerWidth / items)*1 + "px";}
            if (l==3) {i.style.left = -((containerWidth / items)*2) + "px";}
            if (l==4) {i.style.left= -((containerWidth / items)*3) + "px";}
            if (l==5) {i.style.left= -((containerWidth / items)*4)+ "px";}
            if (l==6) {i.style.left= -((containerWidth / items)*5)+ "px";}
            if (l>6) {l = 0;}
        }
    }
    span[0].onclick = ()=> {
        l--;
        for (var i of div) {
            if (l==1) {i.style.left = "0px";}
            if (l==2) {i.style.left= -((containerWidth / items)*1)+ "px";}
            if (l==3) {i.style.left= -((containerWidth / items)*2)+ "px";}
            if (l==4) {i.style.left= -((containerWidth / items)*3)+ "px";}
            if (l==5) {i.style.left= -((containerWidth / items)*4)+ "px";}
            if (l==6) {i.style.left= -((containerWidth / items)*5)+ "px";}
            if (l<0) {l = 6;}
        }
    }
}




















lode()