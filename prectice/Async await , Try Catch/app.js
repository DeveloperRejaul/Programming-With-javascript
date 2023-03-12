/*
Async await diye moluto onek golo function er mudde kontarpor konta call hube
Async await functin er body te seta bule deoya huy

1. Stractor
async function AcycFunc () {
    await AnyFunction()
}
*/

// for practice

console.log("hello");

function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve("Function 01 is completed")  
       },2000)
   })
}

function f2() {
    return new Promise((resolve, reject) => {
       reject("Function 02 is Not completed")
   })
}

function f3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve("Function 03 is completed")  
       },2000)
   })
}
/*
async function myFunc() {
    const t1 = await f1()
    console.log(t1);
    const t2 = await f2()
    console.log(t2);
    const t3 = await f3()
    console.log(t3);
}
myFunc()
*/



// try catch

async function MyFunc() {
    try {
        const t1 = await f1()
        console.log(t1);
        const t2 = await f2()
        console.log(t2);
        const t3 = await f3()
        console.log(t3);
    } catch (error) {
        console.log(error);
    }
}
MyFunc()

console.log("bye");
