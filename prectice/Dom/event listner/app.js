
// click Eevent
    // var clickEvent = document.querySelector("#button1");
    // clickEvent.addEventListener("click", clickfuntion);
    // function clickfuntion() {
    //     alert("Hello");
    // }

    // cayle ayta amra sub ek sate o likte pari
    document.querySelector("#button1").addEventListener("click", function(){
        alert("Hello");
    })




// Eveent kurle Class Add hube and remove hube

    // var addClass = document.querySelector("#mystyle");
    // addClass.addEventListener('mouseover', myfuntion);
    // function myfuntion() {
    //     addClass.classList.add("myclass");
    // }
    // class remove 
    // addClass.addEventListener('mouseout', removeFuntion);
    // function removeFuntion() {
    //     addClass.classList.remove("myclass");
    // }



    // ek sate likar niom
    // document.querySelector("#mystyle").addEventListener('mouseover', function(){
    //     document.querySelector("#mystyle").classList.add("myclass");
    // });
    // remove class
    // document.querySelector("#mystyle").addEventListener('mouseout', function(){
    //     document.querySelector("#mystyle").classList.remove("myclass");
    // })




    // remove and add er kaj ta ekste kurar junno Toggole use kurte pari
        document.querySelector("#mystyle").addEventListener('click', function(){
        document.querySelector("#mystyle").classList.toggle("myclass");
    })






// Onek golo element er sate je bave event niye kaj kurbo

    // var buttonClick = document.querySelector("#buttonClick");
    // var btn = document.querySelectorAll("#btn");
    // btn[0].addEventListener("click", peraFuntion);
    // function peraFuntion () {
    //     var text = this.innerHTML;
    //     buttonClick.innerHTML = (` ${text} button is click`)

    // }
    // btn[1].addEventListener("click", peraFuntion);
    // function peraFuntion () {
    //     var text = this.innerHTML;
    //     buttonClick.innerHTML = (` ${text} button is click`)

    // }
    // btn[2].addEventListener("click", peraFuntion);
    // function peraFuntion () {
    //     var text = this.innerHTML;
    //     buttonClick.innerHTML = (` ${text} button is click`)

    // }





    // loop er maddome je vabe kurbo

    var buttonClick = document.querySelector("#buttonClick");
    var btn = document.querySelectorAll("#btn");


    for(var i = 0 ; i < btn.length ; i++){
        btn[i].addEventListener("click", function(){
            var text = this.innerHTML;
            buttonClick.innerHTML = (`${text} button is click`)
        })
    }







// sob mouse event golo dekbo jevabe
document.querySelector(".raja").addEventListener("click", onClick);
function onClick(e) {
    let val=e.target.textContent = 'hello';
    


    console.log(e)
    console.log(val)
    e.preventDefult();
}





// inpute ja likbo form e ta console dekabe
    let   form =  document.querySelector('#this-form');
    let   input = document.querySelector('input');

    // create event
    form.addEventListener('submit', shocn);

    // call funtion
    function shocn(e) {


        // console.log(e.type)
        console.log(input.value)



        e.preventDefult();
        
    }









