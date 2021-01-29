Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer

SIGMA 3 => 3 + 2 + 1 => 6


var sum = 0
function recursiveSigma(n) {
    if(n == 0){
        sum += n
        console.log(sum)
        return
    }
    sum += n
    n--
    console.log(n)
    recursiveSigma(n)
}
console.log(recursiveSigma(3))
// 1. BAE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

function sumArr(arr, i++) {
    // 1. BASE CASE  
    if(i == arr.length-1){
          return
      }
      sum += arr[i]
      // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
      i++
      // 3. RECURSIVE CALL
      return arr + sumArr(arr, i)
  }
  console.log(sumArr([1,2,3])) // 6
    // [1,2,3] => 6
  


function sumArr(arr, i = 0) {
    // 1. BASE CASE
    if (i === arr.length-1) {
        return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, i+1)
}
 // [1,2,3] => 6
console.log(sumArr([1,2,3,4]))

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

function recFlatten(arr, arr2=[]){
    for (j=0; j < arr.length; j++){
        if (ar,r.isArray(arr[j]) == true){
            arr2 = arr2.concat(recFlatten(arr[j]))
        }
        else {
            arr2.push(arr[j])
        }
    }
    return arr2
}


// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]


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
    var middle = Math.floor(arr.length / 2);
    if (arr[0] != target && arr.length === 1){
        return false;
    }
    if (target === arr[middle]){
        return true;
    }
    else if (target < arr[middle]){
        return recursiveBinary(arr.slice(0, middle), target);
    }
    else if (target > arr[middle]){
        return recursiveBinary(arr.slice(middle), target);
    }
}

console.log(recursiveBinary([1,2,3,4,5,6,7,8,9,11,12,13], 10))


// THUR

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr=[]){

  if (arr[arr.length-1] == num*num){
    return arr
  } 

  arr.push(Math.pow(arr.length+1, 2)) 

  return risingSqaures(num, arr)
  

}
// EX. risingSquares(3) => [1,4,9]
// EX. risingSquares(5) => [1,4,9,16,25]




// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr){


  var lets = string.split('')


  if(lets.length == 0){
    return arr
  }
  
  for (var i=0; i<lets.length; i++){
    var st = ""

  }

}

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]