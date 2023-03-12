

// html id class etc text select

var button = document.getElementById("click").id;
console.log(button);

// var button = document.getElementById("click").className;
// console.log(button);


// var button = document.getElementById("click").type;
// console.log(button);


// var button = document.getElementById("click").title;
// console.log(button)







// style je vave add kurbo

let btn = document.getElementById("click")
btn.style.background='black';
btn.style.color='white';
btn.style.cursor='pointer';
btn.style.padding='5px';
btn.style.border='0';








// change content

// btn.textContent="Button List";
// btn.innerText="My Button List";
// btn.innerHTML="<span>MY Button</span>";




// onek golo eliment ki bave durte huy and style dite huy ta dekbo 

// const buttons = document.getElementsByClassName("click-hear");

// buttons[1].style.background="red";

// console.log(buttons);





// onek golo eliment er mudde kibabe shild ke durbo
    // const list = document.querySelector(".click").getElementsByClassName("click-hear");
    // console.log(list);

    // teg name er maddume je babe silect kubo
    // const lis = document.getElementsByTagName("li");
    // console.log(lis);




// sob golo eliment ke dure ki babe style dibo

const listItems = document.querySelectorAll("li");
listItems.forEach(function( jekonoNam ){
    jekonoNam.style.color="white";
    jekonoNam.style.background="black"
    jekonoNam.style.marginBottom="5px"
});










