
/*==========================================
                Somit == start
===========================================*/

// This key Word uses

  // Implicit Binding
  // Explicit Binding
  // New Binding
  // Window Binding



  // Implicit Binding

     // prectice 01
    var sakib = {
      name : 'sakib',
      age : 35,
      printName: function() {
        console.log(this.name)
      }
    }
    sakib.printName()

  // prectice 02
    var printFlierNameFunction = function (obj) {
      obj.printFlayerName = function () {
        console.log(this.name)
      }
    }

    var sakib = {
      name : 'Sakib',
      age : 35
    }

    var tamim = {
      name : 'Tamim',
      age : 35
    }

    printFlierNameFunction(sakib);
    printFlierNameFunction(tamim);

    sakib.printFlayerName();
    tamim.printFlayerName();

  // prectice 03
  var person = function (name, age) {
    return{
      name : name,
      age : age,
      printNmae : function(){
        console.log(this.name);
      }
    }
  }

  var sakib = person('sakib', 35)
  sakib.printNmae()



  // prectice 04
  var person = function (name, age) {
    return{
      name : name,
      age : age,
      printNmae : function(){
        console.log(this.name);
      },
      father : {
        name : 'mr. xxxx',
        printName : function () {
          console.log(this.name)
        }
      }
    }
  }
  person().father.printName()



// Explicit Binding // ============== .call()

  // prectice 01
  var printName = function () {
    console.log(this.name)
  };

  var sakib = {
    name : 'Sakib',
    age : 34
  };

  printName.call(sakib)

  // prectice 02
  var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1},${v2}&${v3}`)
  };

  var v1= 'handsome';
  var v2= 'Allrounder';
  var v3= 'crieater';

  var sakib = {
    name : 'Sakib',
    age : 34
  };

  printName.call(sakib , v1, v2, v3)
  

// Explicit Binding // ============== .apply()       ===== arry recive kurte pale

  // prectice 03
  var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1},${v2}&${v3}`)
  };

  var v1= 'handsome';
  var v2= 'Allrounder';
  var v3= 'crieater';

  var v = [v1, v2, v3]
  var sakib = {
    name : 'Sakib',
    age : 34
  };

  printName.apply(sakib , v)


// Explicit Binding // ============== .bind() ===========call kurar somuy noton variave e stor kura jay

var printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1},${v2}&${v3}`)
};

var v1= 'handsome';
var v2= 'Allrounder';
var v3= 'crieater';

var sakib = {
  name : 'Sakib',
  age : 34
};

var newFun = printName.bind(sakib , v1, v2, v3);
newFun()


// New Binding 
function persone (name, age) {
  // var this = Object.create(null)

  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`)

  // retern this
}
var sakib = new persone('sakib', 33)


/*==========================================
                Somit == ends
===========================================*/



//     // Object er kettere this key word je babe bebohito huy//
//     // Exampul 01

// var pera = document.querySelector("p");


//     var person = {
//         firstNmae: "Rejaul",
//         lastName: "Karim",
//         id: 4587,
//         fullName:function() {
//             return `${this.firstNmae} ${this.lastName}`
//         }
//     }
//     pera.innerHTML = person.fullName();
//     console.log(person.fullName());



//     // This key word alon obostay (window object ke dorbe)
//     let x = this;
//     console.log(x); // windo object retan kube


//     // Function e this je babe kaj kure
//     function myFunction() {
//         return this;
//       }
//       console.log(myFunction())

//       function f2() {
//         'use strict'; // see strict mode ///strict mode undifiend dibe
//         return this;
//       }
      
//       f2() === undefined; // true




//     // this e call methed diye je babe deke ante huy
//     // prectic 01
//         const person1 = {

//             fullName: function() {
//             return this.firstName + " " + this.lastName;
//             }
//         }
//         const person2 = {
//             firstName:"John",
//             lastName: "Doe",
//         }
//         console.log(person1.fullName.call(person2)); 

//     // prectic 02
//       function add(c, d) {
//         return this.a + this.b + c + d;
//       }
      
//       var o = {a: 1, b: 3};
      
//       // The first parameter is the object to use as
//       // 'this', subsequent parameters are passed as
//       // arguments in the function call
//       add.call(o, 5, 7); // 16
      
//       // The first parameter is the object to use as
//       // 'this', the second is an array whose
//       // members are used as the arguments in the function call
//       add.apply(o, [10, 20]); // 34
      


//     // In web browsers, the window object is also the global object:
//     console.log(this === window); // true

//     a = 37;
//     console.log(window.a); // 37

//     this.b = "MDN";
//     console.log(window.b)  // "MDN"
//     console.log(b)         // "MDN"