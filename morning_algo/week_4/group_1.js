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

function recursiveSigma(num) {
    // 1. BASE CASE
if(num == 1){
    return 1
}
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
     // 3. RECURSIVE CALL
    return num + recursiveSigma(num - 1)
}
// 5 => 5 + 4 + 3 + 2 + 1 => 15
console.log(recursiveSigma(3)) // 6













// TUES


function sumArr(arr, i=0) {
    // 1. BASE CASE  
    if(i == arr.length-1){
        return arr.length
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, ++i)
}
console.log(sumArr([1,2,3])) // 6


// TUE
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false
*/

function recFlatten(arr){
  
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]// TUE
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false
*/

function recFlatten(arr){
  
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]