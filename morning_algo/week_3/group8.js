// Balance Point
// Write a function that returns whether the given
// array has a balance point BETWEEN indices, 
// where one side’s sum is equal to the other’s. 

function balancePoint(arr){
    //Find the sum of the whole array
    //sum through the array until the value is half of the total sum
          //return true
      //return false
      var sum=0;
      for (let i = 0; i < arr.length; i++) {
          sum+=arr[i]
      }
      partialsum=0;
    for (var i=0; i<arr.length; i++){
        partialsum+=arr[i]
        if (partialsum == sum/2){
            return true
        }
    }
    return false
}

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
    for (var i=0; i<arr.length; i++){
        var sumleft = 0;
        var sumright = 0;
    for (var j=i+1; j<arr.length; j++){
        sumleft = sumleft + arr[j]
    }
    for (var n = 0; n<i; n++){
        sumright=sumright + arr[n]
    }
    if (sumleft == sumright){
        return i
    }
    }
    return -1
}


// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1


/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    let startIndx = 0;
    
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }   
  
  
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    
    }
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }


// -----------------------------------------------------------------------------------------------//

// WED
/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  arr.splice(index, num)
*/

function dedupeArr(arr){
    returnArr = []
    for (let i=0; i < arr.length; i++) {
        if (arr[i] != returnArr[returnArr.length-1]) {
            returnArr += arr[i]
        }
    }
    return returnArr
}

function dedupeArr2(arr){
    // ITERATE THROUGH THE ARRAY
    for (let i=1; i < arr.length; i++) {
        // 
        if (arr[i] == arr[i-1]){
            arr.splice(i, 1)
            i-=1
        }
    }
    return arr
}

// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]

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
    // find max and min of arr
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    // iterate from min to max and check if in arr
    for (let i = min; i < max; i++) {
        if (arr.indexOf(i) == -1) {
            return true, i
        }
    }
    return false
}

function missingValue2(arr){

    for (let i = arr.length - 1; i > 0; i--)
        if (i == arr.length) {
            return true
        }   
    return false
}


// [3,0,1,2] => False
// [4,0,2,1] => True