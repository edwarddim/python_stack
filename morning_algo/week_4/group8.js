function recursiveSigma(n) {
    // BASE CASE
    if (n == 1) {
        return n
    }
    
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    sum = n
    n--
    // RECURSIVE CALL
    sum += recursiveSigma(n)
    return sum
  }

  function recFactorial(num){
    //base case
    if (num == 2){
        return num
    }
    //forward progress
    total = num
    num--
    // recursive call
    total *= recFactorial(num)
    return total
}

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
    if (arr.length == 1) {
        if (target == arr[0]) {
            return true
        }
        else {
            return false
        }
    }
    var midInd = Math.floor((arr.length - 1) / 2)
    if (target == arr[midInd]) {
        return true
    }
    else if (target < arr[midInd]) {
        return recursiveBinary(arr.slice(0, midInd), target)
    }
    else {
        return recursiveBinary(arr.slice(midInd + 1, arr.length), target)
    }
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))



// CHOOSE OUR MIDDLE INDEX
// BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
// FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
// MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
// dont forget we can use arr.slice() - look up the documentation

console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))


