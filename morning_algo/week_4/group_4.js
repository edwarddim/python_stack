// MON


function iteratePrint(num){
    for(var i= num ; i >=0 ; i--){
      console.log(i)
    }
  }
  iteratePrint(5)
  
  // FUNCTION DEFINED
  function recursivePrint(num){
    // 1. BASE CASE
    if(num == 1){
      console.log(num)
      return "hELLO"
    }
    console.log(num)
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    num--
    // 3. RECURSIVE CALL
    recursivePrint(num)
  }
  // FUNCTION CALLED
  recursivePrint(3)
  
  // 1, BASE CASE
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  
  /* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
  */



 = 0
ction recursiveSigma(num) {
f(num == 1){
       sum += num
       console.log(sum)
       return
 }
 sum += num
   num--
   recursiveSigma(num)
 }
 // 5 => 5 + 4 + 3 + 2 + 1 => 15
 recursiveSigma(3) // 6

 recursiveSigma(5)
 recursiveSigma(10)
 recursiveSigma(20)




/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function recursiveBinary(arr, target){

}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR


  /* 
    Recursively sum an arr of ints
  */


sum = 0
function sumArr(arr, i=0) {
    if(i == arr.length-1){
        sum += arr[i]
        console.log(sum)
        return
    }
    sum += arr[i]
    i++
    sumArr(arr, i)
}
 sumArr([1,2,3]) // 6
  // [1,2,3] => 6
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  

  function sumArr(arr, i = 0) {
    // 1. BASE CASE

    if(i == arr.length - 1){
      return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT
    // i + 1
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, i+1)
  }
  // [1,2,3] => 6
  console.log(sumArr([1,2,3]))
  console.log(sumArr([1,2,1,2,1,2]))


/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    for(var i=0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        arr[i] is an array
      }
    }

    var arr1 = [1,2,3]
    var arr2 = [4,5,6]
    var arr3 = arr1.concat(arr2)
    console.log(arr3) => [1,2,3,4,5,6]
*/

function recFlatten(arr){
  // ITERATE THROUGH THE ARR AND CHECK TO SEE IF ELEMENT IS AN ARRAY
  // 
  var tab = []
  for (var i=0; i<arr.length; i++){
    if (Array.isArray(arr[i])){
      tab = tab.concat(recFlatten(arr[i]))
    } else {
      tab.push(arr[i])
    }
  }
  return tab
}
// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
console.log(recFlatten([1,[2,3,[4]],5]))


// Recursive Binary Search
//  Input: SORTED array of ints, int value
//   Output: bool representing if value is found
//   Recursively search to find if the value exists, do not loop over every element.
//   Approach:
//   Take the middle item and compare it to the given value.
//   Based on that comparison, narrow your search to a particular section of the array   

function recursiveBinary(arr, target){
  // 1, BASE CASE
      while(arr[0] != target){
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
          var midInd = Math.floor(arr.length / 2)
          if(target == arr[midInd]){
              return true
          }
          else if(target < arr[midInd]){
              arr = arr.slice(0,midInd)
              return recursiveBinary(arr, target)
          }
          else{
              arr = arr.slice(midInd, arr.length-1)
              return recursiveBinary(arr, target)
          }
      }
      return false
  // 3. RECURSIVE CALL
  }
  console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 2))