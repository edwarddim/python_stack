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
  var leftSum = 0
  var rightSum = 0
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
// EX. [9,9] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
  if(arr.length < 3) return -1 
  var leftInd = 0;
  var rightInd = arr.length-1;
  var leftSum = 0
  var rightSum = 0
  while(rightInd - leftInd != 0){
      if(leftSum <= rightSum){
          leftSum += arr[leftInd]
          leftInd++
      }
      else {
          rightSum += arr[rightInd]
          rightInd--
      }
  }
  return (leftSum == rightSum) ? leftInd : -1
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
  // 1. SET LEFT AND RIGHT POINTERS TO BEGINNING AND END OF ARRAY
  var leftInd = 0
  var rightInd = arr.length - 1
  // 2. REPEAT PROCESS UNTIL 
  while(leftInd <= rightInd){
    // 3. FIND THE MIDDLE INDEX OF THE CURRENT RANGE OF INDICES
    var midInd = Math.floor((rightInd + leftInd) / 2)
    // 4. COMPARE THE TARGET WITH THE MIDDLE VALUE
    if(target == arr[midInd]){
      return true
    }
    else if(target < arr[midInd]){
      rightInd = midInd - 1
    }
    else{
      leftInd = midInd + 1
    }
  }
  return false
}



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
/* 
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
  Input: 2 arrays
  Output: 
*/
function twoNumSum(arr1, arr2){
  var returnArr = []
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      returnArr.push(arr1[i] + arr2[j])
    }
  }
  return returnArr
}
console.log(twoNumSum([1,2,3], [4,5,6]))
// EX. [1,2,3] , [4,5,6] => [5,6,7,6,7,8,7,8,9]

for(let i = 0; i < arr1.length;i ++){

}
for(let j = 0; j j < arr2.length; j++){

}

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