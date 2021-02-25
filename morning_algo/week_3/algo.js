/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
  // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
  // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
  // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
  // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
  // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
}// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
  var leftInd = 0;
  var rightInd = arr.length - 1;
  var leftSum = 0;
  var rightSum = 0;
  while(leftInd <= rightInd){
    if(leftSum <= rightSum){
      leftSum += arr[leftInd]
      leftInd++
    }
    else{
      rightSum += arr[rightInd]
      rightInd--
    }
  }
  if(leftSum == rightSum){
    return true
  }
  else{
    return false
  }
}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
  // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
  var leftInd = 0
  var rightInd = arr.length - 1

  while(leftInd <= rightInd){
    var midInd = Math.floor( (rightInd + leftInd) / 2 )
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    if(target == arr[midInd]){
      return true
    }
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    else if(target < arr[midInd]){
      rightInd = midInd - 1
    }
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
    else if(target > arr[midInd]){
      leftInd = midInd + 1
    }
  }
  return false
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9] , 4))



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
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
  var output = []
  for( var i =0; i < arr.length; i++){
    if(output.indexOf(arr[i]) == -1){
      output.push(arr[i])
    }
  }
  return output
}
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

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
  var total = 0
  var indTotal = 0
  for(var i = 0; i < arr.length; i++){
    // GET TOTAL OF VALUES INSIDE THE ARR
    total += arr[i]
    // GET TOTAL OF INDEX FOR THE ARRAY
    indTotal += i
  }
  // COMPARE THE TOTAL OF VALUE VS THE INDEXES
  if(indTotal == total){
    return false
  }
  else{
    return true
  }
}
// [3,0,1,2] => False
// [4,0,2,1] => True

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

// Given a sequence of integers as an array, determine whether 
// it is possible to obtain a strictly increasing sequence by 
// removing no more than one element from the array.
function almostIncreasingSequence(arr){

}

// EX. [1, 3, 2, 1] => FALSE
// EX. [1, 2, 3, 4, 3, 6] => TRUE