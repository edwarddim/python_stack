// MON
// ITERATIVELY VS RECURSIVELY
function iteraatePrint(number){
  //    START         END       INCREMENT/DECREMENT
  for(var i = number; i > 0        ; i--){
    console.log(i)
  }
}

function recursivePrint(number){
  // 1, BASE CASE (END OF THE RECURSION)
  console.log(number)
  if(number == 0){
    return
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  number -=1
  // 3. RECURSIVE CALL
  recursivePrint(number)
  console.log("BOTTOM OF FUNCTION")
}
// recursivePrint(5)

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  // 1, BASE CASE
  if(n == 1){
    return 1
  }
  // 2. FORWARD PROGRESS (DECREMENT)
  // 3. RECURSIVE CALL
  return n + recursiveSigma(n-1)
}
// console.log(recursiveSigma(3))
// 5 => 5 + 4 + 3 + 2 + 1 => 15


// 3 => 3 * 2 * 1 => 6
// 4 => 4 * 3 * 2 * 1 => 24
function iterativeFactorial(num){
  var temp = 1
  for(var i = num; i > 0; i--){
    temp = temp * i
  }
  return temp
}

function recFactorial(num){
  // BASE CASE
  if(num == 1){
    return 1
  }
  // FORWARD PROGRESS (DECREMENT) AND RECURSIVE CALL
  return num * recFactorial(num-1)
}
// recFactorial(3)


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
  Recursively sum an arr of ints
*/

function iterateSumArr(array){
  sum = 0
  for(var i = 0; i < array.length; i++){
    sum += arr[i]
  }
  return sum
}

function recSumArr(arr, i = 0) {
  // BASE CASE
  if(arr.length-1 == i){
    return arr[i]
  }
  // FORWARD PROGRESS (INCREMENT) AND RECURSIVE CALL
  return arr[i] + recSumArr(arr, i + 1)
}
console.log(recSumArr([1,2,3,4]))
// [1,2,3] => 6

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