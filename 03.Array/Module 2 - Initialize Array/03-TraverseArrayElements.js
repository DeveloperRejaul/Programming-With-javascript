/**
 * @Title : Trasverse Array Elements
 */

const arr = [1, 2, 3, 4, 5, 6, 26, 64,23]

// Simple Traverse
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Array Sum to Avg
let total = 0
let avg = 0

for (let i = 0; i < arr.length; i++) {
   total += arr[i]
}
avg = total/arr.length


// Fint Large Array
let largeNum = arr[0]
for (let i = 1; i < arr.length; i++) {
    if ( arr[i] > largeNum) largeNum = arr[i]
}



// Log 
arr
total
avg
largeNum