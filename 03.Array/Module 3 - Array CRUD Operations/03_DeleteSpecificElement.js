/**
 * @Title : Delete Apecific Elements
 */

let numbers = [1,2,3,4,5,6,7,8,9]

// Remove First Element
numbers.shift() 

// Remove Last Element
numbers.pop() // way 01
numbers.length = numbers.length-1 // way 02

// Remove Inside Element - Splice useing index
// splice(starting , delete Count, Add value)
numbers.splice(2,1)

// Remove Inside Element - Splice useing value
const toBeDeleted = 5

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDeleted) {
        numbers.splice(i, 1)
    }
}

// Filter Array
const toBeDeleted1 = 6
numbers = numbers.filter((items) => items !== toBeDeleted1 )

// Delete oparator
numbers[1] = undefined  // Way 01
delete numbers[1] // way 02

// Reset Whole Array
let x = [1, 2, 3]
let y = x  
x=[]

// Alternative  Way => Reset Whole Array
let xx = [1, 2, 3]
let yy = xx
xx.length = 0

// Reset Array Useing While Loop
while (numbers.length) numbers.pop()




// Log
numbers
x
y
xx
yy