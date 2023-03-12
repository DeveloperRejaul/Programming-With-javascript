/**
 * @Title: Update Extiing Elements
 */

// Easy One 
const numbers = [1, 2, 7, 4, 5]
numbers[2]=3 // over write Easy Way


// Array of Objects
const students = [
    {id:1, name:'Rejaul'},
    {id:2, name:'Kamal'},
    {id:3, name:'Jamal'},
    {id:4, name:'Rohim'}
] 

const givenID = 3
const upDateName = 'Romjan Ali'

for (let i = 0; i < students.length; i++) {
    if (givenID === students[i].id) {
        students[i].name = upDateName
        break
    }
}

// log
numbers
students