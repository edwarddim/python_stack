// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
    let left = 0
    let right = 0
    for(l
et i = 0; i < arr.length; i++) {
        left += arr[i]
        for (let j = i+1; j<arr.length; j++) {
            right += arr[j]
        }
        if (left==right) {
            return true
        }
        right = 0
    }
    return false
}


// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
    let left = 0
    let right = 0
    for(let i = 1; i < arr.length; i++) {
        left += arr[i-1]
        for (let j = i+1; j<arr.length; j++) {
            right += arr[j]
        }
        if (left==right) {
            return i
        }
        right = 0
    }
    return -1
}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
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

}
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]