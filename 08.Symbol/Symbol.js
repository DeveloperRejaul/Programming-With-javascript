var symbol1 = Symbol();
var symbol2 = Symbol();

//!! js symbol always unique
console.log(symbol1 === symbol2); // print false
console.log(symbol1 == symbol2); // print false

//!! Symbol argument is symbol description
const id = Symbol("id"); // id is a symbol description
const name = Symbol("name"); // name is a symbol description

// How to use Symbol argument for functional // with out description
// Like this => const id = Symbol.for("hello world")
const id2 = Symbol.for("hello world");
console.log(id2);
console.log(id);
