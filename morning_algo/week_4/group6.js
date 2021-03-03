
function recSumArr(arr, i = 0) {
  // 1. BASE CASE
  if(i == arr.length - 1){
    return arr[arr.length-1]
  }
  // 2. FORWARD PROGRESS (INCREMENT / DECRMENT)
  return arr[i] + recSumArr(arr,i=i+1)
  // 3. RECURSIVE CALL
}
console.log(recSumArr([1,2,3]))
// [1,2,3] => 6
<<<<<<< HEAD
// --------------


// HINT: YOU'RE GOING TO NEED A FOR LOOP
function stringSubset(string, arr = []){
  // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
  // FOR LOOP
}

function stringSubsetNoArr(string){

}
// console.log(stringSubset("abcd"))
// console.log("HELLO WORLD")

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]
=======
// --------------s

/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/
// LEVEL 1 [1,2,3,4,5,6,7,8,9] ,  8
// LEVEL 2 [6,7,8,9] , 8
// LEVEL 3 [8,9] , 8

function recursiveBinary(arr, target){
  // BASE CASE - RETURN FALSE IF ARR.LENGTH == 0
  // CHOOSE OUR MIDDLE INDEX
  // BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
  // FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
  // MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
  // dont forget we can use arr.slice() - look up the documentation
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))
>>>>>>> 644f5bd165a57090ba039994df0a23ff480607fc
