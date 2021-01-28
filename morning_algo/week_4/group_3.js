var sum
function recursiveSigma(n) {
    // 1. BASE CASE
    if(n == 0){
        return n
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    n--
    // 3. RECURSIVE CALL
    return n+1 + recursiveSigma(n)
}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
console.log(recursiveSigma(5))



function recursiveSigma(n, sum) {
    // 1. BASE CASE
    if(n == 0){
        console.log(sum)
        return
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    sum += n
    n--
    // 3. RECURSIVE CALL
    recursiveSigma(n, sum)

}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
recursiveSigma(5, 0)

function recursiveSigma(n) {
    if (n == 0) {
        return n
    }
    return n + recursiveSigma(n - 1)
}

console.log(recursiveSigma(5))



function sumArr(arr, i = 0) {
    if (i < arr.length-1)
        return i+arr[i]
    // 1. BASE CASE
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
  }
  sumArr(arr, i  )

  // [1,2,3] => 6
  console.log(sumArr([1,2,3]))

// TUE
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
// ITERATE THROUGH THE ARR AND CHECK TO SEE IF ELEMENT IS AN ARRAY
// 

function recFlatten(arr){
    // Base Case
    // if i = arr.length 
    // Forward Progress

    // Recursive Call
    for (var i = 0; i <arr.length; i++){
        if(Array.isArray(arr[i])){
            return recFlatten[arr[i]]
        }
        else{
            console.log(arr[i])
        }
    }
}

var test1 = [1,[2,3,[4]],5] // false, true, false 
recFlatten(test1)


const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());


// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false

    Array.isArray(1) returns false
*/


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
    var mid = Math.floor(arr.length/2)

    if (arr[mid] == target){
        return true
    } else if (arr.length <= 1 && arr[mid] != target) {
        return false
    }

    if (target < arr[mid]) {
        arr = arr.slice(0,mid)
    } else {
        arr = arr.slice(mid,arr.length)
    }

    return recursiveBinary(arr, target)   
}

var RA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(recursiveBinary(RA,10))