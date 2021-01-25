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

// MON

// 1, BASE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer

  SIGMA 3 => 3 + 2 + 1 => 6
*/

function recursiveSigma(n) {
  // 1. BASE CASE
  if(n == 1){
    return 1
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  return n + recursiveSigma(n - 1)
}
// 5 => 5 + 4 + 3 + 2 + 1 => 15
console.log(recursiveSigma(3)) // 6

/* 
  Recursively sum an arr of ints
*/

function sumArr(arr, i = 0) {

}
// [1,2,3] => 6

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

function recFlatten(arr){
  
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED


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
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr){

}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]

/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

function LCM(a,b, aMult=a, bMult=b){

}


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr){

}

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]