// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
  if(arr.length < 2) return false
  var leftInd = 0;
  var rightInd = arr.length-1;
  var leftSum, rightSum = 0
  while(leftInd <= rightInd){
      if(leftSum <= rightSum){
          leftSum += arr[leftInd]
          leftInd++
      }
      else {
          rightSum += arr[rightInd]
          rightInd--
      }
  }
  // console.log("LEFT SUM: ", leftSum)
  // console.log("RIGHT SUM: ", rightSum)
  return (leftSum == rightSum) ? true : false
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

}



// -----------------------------------------------------------------------------------------------//
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
    for(var i = arr.length -1; i > 0; i--) {
      if(arr[i] == arr[i-1]){
        arr.splice(i, 1);
      }
    }
    return arr;
}
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]
// DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY

/* 
  Array: Mode
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/
// EX. [1,1,2,2,2,3,3,3] => [2,3]
// EX. [1,1,1,2,2,2,3,3,3] => []
function mode(arr){
  result = [];
  freqObj = {};
  var maxFreq = 0;
  for(var i = 0; i < arr.length; i++) {
    if(freqObj.hasOwnProperty(arr[i])) {
      freqObj[arr[i]] += 1;
    } else {
      freqObj[arr[i]] = 1;
    }
    if(freqObj[arr[i]] > maxFreq){
      maxFreq = freqObj[arr[i]];
    }
  }
  var allSameFreq = true
  for(var key in freqObj){
    if(freqObj[key] == maxFreq) {
      result.push(parseInt(key));
    } else {
      allSameFreq = false
    }
  }
  if(allSameFreq == true){
    return [];
  }
  return result;
}
console.log(mode([1,2,2,3,3]))
console.log(mode([1,1,1,3,3,3,2,2,2]))
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