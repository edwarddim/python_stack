

/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array

  DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY
  Bonus: do it in O(n) time (no nested loops, new array ok)
  arr.splice(index, num)
*/
function dedupeArr(arr){
    let output = []

    for (let i = 0; i < arr.length; i++) {
        if (output.indexOf(arr[i]) == -1) { // if arr[i] not in output arr
            output.push(arr[i])             
        }
    }
    return output
}
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]

let testarr = [1,1,1,2,2,2,3,3,4,4,4,5,5,5]

console.log(dedupeArr(testarr))


function dedupeArr(arr){
    for(var i = arr.length -1; i > 0; i--) {
      if(arr[i] == arr[i-1]){
        arr.splice(i, 1);
      }
    }
    return arr;
  }

let testarr1 = [1,1,1,2,2,2,4,4,4,5,5,5]

console.log(dedupeArr(testarr1))
  
// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
  var Sum = 0
  var indexSum = 0
  for (var i = 0; i < arr.length; i++) {
    Sum += arr[i]
    indexSum += i
  }
  if (Sum == indexSum) {
    return false
  }
  else {
    return true
  }
}
console.log(missingValue([3,0,1,2]))
console.log(missingValue([4,0,2,1]))
// [3,0,1,2] => False
// [4,0,2,1] => True
