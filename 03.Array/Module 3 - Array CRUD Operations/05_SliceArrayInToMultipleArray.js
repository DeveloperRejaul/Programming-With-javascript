/**
 * @Title : Slice Array into multiple array 
 */
// Note: kata katir kaze bebohar huy


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Slice
const sliced = arr.slice(1,3)

// Clone Array or Copy array
const clone = arr.slice()

// Array like Object to array 
function toArray() {
    return Array.prototype.slice.call(arguments)
}
const argArr = toArray(4, 5, 6, 7, 8, 'test', {name: 'rejaul'})

// Log
arr
sliced
clone
argArr