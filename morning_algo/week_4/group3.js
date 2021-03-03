/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/
// LEVEL 1 [1,2,3,4,5,6,7,8,9] ,  8
// LEVEL 2 [6,7,8,9] , 8
// LEVEL 3 [8,9] , 8

function recursiveBinary(arr, target){
    // BASE CASE - RETURN FALSE IF ARR.LENGTH == 0
    if arr.length == 0:
      return false;
    // CHOOSE OUR MIDDLE INDEX
    var midIdx = math.floor((arr.length-1)/2);
    // BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
    // FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
    // MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
    // dont forget we can use arr.slice() - look up the documentation
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))
