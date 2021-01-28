function recursiveSigma(n, o=0) {


    // console.log(n+" "+o)

    if (n == 0){
        console.log(o)
    }


    o += n

    n--
    recursiveSigma(n, o)

    

}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
recursiveSigma(5)


function sumArr(arr, i = 0) {
  // 1. BASE CASE
  sum = 0;
  if (i = arr.length) {
      sum += i
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  
  // 3. RECURSIVE CALL
}
sumArr(arr, i+1  )
// [1,2,3] => 6
console.log(sumArr([1,2,3]))




// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = arr1.concat(arr2)
// console.log(arr3) => [1,2,3,4,5,6]
// */

function recFlatten(arr){
  // can use Array.isArray() in the base case to see if arr is actually an array
  if(Array.isArray(arr)){
    return true
    console.log(arr)
  }
    else{
      return false
    }
var arr3 =arr1.concat(arr2)
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]

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
  // Base Case
  if(arr.length == 1){
    if(arr[0] == target){
      return true
    }
    return false
  }
  // Forward Progress
  var middle = Math.floor(arr.length / 2)
  if(arr[middle] == target){
    return true
  }else if(arr[middle] > target){
    //pass the first half of the array
    n
    return recursiveBinary()
  }
  else{
    //pass the second half of the array
    return recursiveBinary()
  }
  // Recursive Call
  
  
  return false
}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
var arr = [1,2,3,4,5,6,7,8]
console.log(recursiveBinary(arr,5))
// THUR