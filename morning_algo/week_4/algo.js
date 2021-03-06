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
// console.log(recSumArr([1,2,3,4]))
// [1,2,3] => 6
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
    .slice(start(inclusive), end(exclusive))
    var name = "edward"
    var part = name.slice(2,7)
*/
// HINT: YOU'RE GOING TO NEED A FOR LOOP
function stringSubset(string, arr = []){
  // BASE CASE
  if(string.length == 0){
    arr.push("")
    return arr
  }
  for(var i = string.length; i > 0; i--){
    arr.push(string.slice(0,i))
  }
  // FORWARD PROGRESS (INCCREMENT / DECREMENT)
  // RECURSIVE CALL
  console.log("ARR BEFORE RECURSION: " , arr)
  return stringSubset( string.slice(1, string.length) , arr)
}
// console.log(stringSubset("abcd"))
// console.log("HELLO WORLD")

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    Array.concat() will also come in handy
    var array1 = [1,2,3]
    var array2 = [4,5,6]
    var array3 = array1.concat(array2)
    console.log(array3) => [1,2,3,4,5,6]
*/
function recFlatten(arr){
    // BASE CALL
    if(!Array.isArray(arr)){
      console.log("THIS IS A NUMBER:", arr)
      return arr
    }
    var array = []
    // FORWARD PROGRESS
    // RECURSIVE CALL
    for(var i = 0; i < arr.length; i++){
        array = array.concat(recFlatten(arr[i]))
    }
    return array
}
// console.log(recFlatten([ 1, [2,3,[4]] , 5 ]))
//            0     1        2
// LEVEL 1. [ 1, [2,3,[4]] , 5 ] => [1,2,3,4,5]

//           0   1   2
// LEVEL 2. [ 2 ,3, [4] ]


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
// LEVEL 1 [1,2,3,4,5,6,7,8,9] ,  8
// LEVEL 2 [6,7,8,9] , 8
// LEVEL 3 [8,9] , 8

function recursiveBinary(arr, target){
  // BASE CASE
  if(arr.length == 1){
    if(arr[0] == target){
      return true
    }
    else{
      return false
    }
  }
  // FIND THE MIDDLE NUMBER OF THE ARRAY
  var midIndex = Math.floor(arr.length/2)
  var midValue = arr[midIndex]
  // CHECK TO SEE IF TARGET IS THE MIDDLE NUMBER
  if(target == midValue){
    return true
  }
  // IF TARGET IS LESS THAN, CUT LEFT HALF OF ARRAY AND RECURSIVE CALL
  if(target < midValue){
    return recursiveBinary( arr.slice(0, midIndex), target )
  }
  // IF TARGET IS GREATER THAN, CUT RIGHT HALF OF ARRAY AND RECRUSIVE CALL
  else{
    return recursiveBinary( arr.slice( midIndex + 1, arr.length), target )
  }
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))






// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr = []){

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
