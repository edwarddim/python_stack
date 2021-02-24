Array: Remove Duplicates
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array

DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY
Bonus: do it in O(n) time (no nested loops, new array ok)
arr.splice(index, num)
*/
function dedupeArr(arr){
let i = 0
while(i < arr.length){
  if(arr[i] == arr[i+1]){
    arr.splice(i+1,1)
  }
  else {
    i++
  }
}
return arr
console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))

function dedupeArr(arr){
    for(i = 0; i < arr.length; i++) {
      if(arr[i] == arr[i+1]){
        arr.splice(i+1,1)
      }
    }
    return arr
}
console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]

// array has no hasOwnProperty method
function dedupeArr(arr) {
    var newArr = []
    for (var i = 0; i<arr.length; i++) {
        if(arr.hasOwnProperty(arr[i])) {
            delete arr[i]
        }
        else {
            i++
        }
    }
    return arr
}
console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4]))