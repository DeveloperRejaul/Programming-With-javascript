/**
 * @Title : Array Of anythig
 */

// Array of Object
const objArr = [
    {id:1, name:'Rahul'},
    {id:2, name:'Rejaul'}
]



// Array Of Fanction
const sum = (a,b) =>a+b
const sub = (a,b) =>a-b
const times = (a,b) =>a*b
const div = (a,b) =>a/b
const mod = (a, b) => a % b

const funcs = [sum, sub, times, div, mod]
const a = 10
const b = 20

for (let i = 0; i < funcs.length; i++) {
    const rejult = funcs[i](a, b)
    rejult
}



// Array Of Arrays  - Multy Dimansional Array
const PointTable = [
    [0,0],
    [3,5],
    [5,7],
    [10,23],
]

// One Dimansional Traverse
for (let i = 0; i < PointTable.length; i++) {
 console.log(PointTable[i]);
}

// Tow Dimansional Traverse
const numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
     console.log(numbers[i][j]);  
    }
}

// 
for (let i = 0; i < PointTable.length; i++) {
    for (let j = 0; j <PointTable[i].length; j++) {
       console.log(PointTable[i][j]);
    }
}


// Matrix Example
const matrixA = [
    [1,3],
    [1,0],
    [1,2],
]
const matrixB = [
    [0,0],
    [7,5],
    [2,1],
]


const matrixSum  =(matrixA, matrixB ) =>{
    const result = []
    for (let i = 0; i < matrixA.length; i++) {
        const row = []
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j])
        }
        result.push(row)
    }
    return result
}


// Log
const result = matrixSum(matrixA,matrixB)
result

