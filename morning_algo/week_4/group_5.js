
/* 
    Recursively sum an arr of ints
*/

function sumArr(arr, i = 0){
    // 1. BASE CASE
    
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    
    // 3. RECURSIVE CALL
    
    
    
    }
    // [1,2,3] => 6
    console.log(sumArr[1,2,3])

    /* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false
*/
var loop = 0
function recFlatten(arr){
    var temp = []
    loop++
    console.log(loop)
    for(var i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            recFlatten(arr[i])
        }
    }
    for(var i = 0; i<arr.length; i++){
        temp.push(arr[i])
    }
    return temp
}

recFlatten([1,[2,3,[4]],5])

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]



// Recursive Binary Search
// Input: SORTED array of ints, int value
// Output: bool representing if value is found
// Recursively search to find if the value exists, do not loop over every element.
// Approach:
// Take the middle item and compare it to the given value.
// Based on that comparison, narrow your search to a particular section of the array
// */

function recursiveBinary(arr, target){

}

// --------------------------------------

