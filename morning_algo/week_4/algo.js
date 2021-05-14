// MON
// ITERATIVELY VS RECURSIVELY

function iteratePrint(num){
  for( var i = num; i >= 0; i--){
    console.log(i)
  }
}
iteratePrint(5)

function recursivePrint(num){
  // 1. BASE CASE (THE CONDITION THAT STOPS THE INFINITE LOOP)
  if(num == 0){
    return
  }
  // 2. FORWARD PROGRESS (INCREMENT/DECREMENT)
  console.log(num)
  num--
  // 3. THE RECURSIVE CALL
  recursivePrint(num)
  console.log("END OF FUNCTION")
}

recursivePrint(3)
// recursivePrint(5)

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  // BASE CASE
  if(n == 1){
    return 1
  }
  // FORWARD PROGRESS (INCREMENT / DECRMENT)
  // RECURSIVE CALL
  return n + recursiveSigma(n-1)
}
console.log(recursiveSigma(3))
// 5 => 5 + 4 + 3 + 2 + 1 => 15


// 3 => 3 * 2 * 1 => 6
// 4 => 4 * 3 * 2 * 1 => 24
function iterativeFactorial(num){

}

function recFactorial(num){
  if(n == 1){
    return 1
  }
  return n * recursiveSigma(n-1)
}
// recFactorial(3)



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
/* 
  Recursively sum an arr of ints
*/

function iterateSumArr(array){
  var sum = 0
  for(var i = 0; i <array.length;i++){
    sum += arr[i]
  }
  return sum
}

function recSumArr(arr, i = 0) {
  // 1. BASE CASE
  if(i == arr.length - 1){
    return "something"
  }
  // 2. FORWARD PROGRESS (INCREMENT / DECRMENT)
  // 3. RECURSIVE CALL
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
  // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
  if(string.length == 1){
    arr.push(string)
    return arr
  }
  // FOR LOOP
  for(var i = 0; i < string.length; i++){
    arr.push(string.slice(i, string.length))
  }
  return stringSubset(string.slice(0, string.length - 1), arr)
}
console.log(stringSubset("abcd"))

function stringSubsetNoArr(string){

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

    Array.concat() will also come in handy]
    var array1 = [1,2,3]
    var array2 = [4,5,6]
    var array3 = array1.concat(array2)
    console.log(array3) => [1,2,3,4,5,6]
*/
function recFlatten(arr){
  var newarr=[]
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      newarr = newarr.concat(recFlatten(arr[i]))
    } else {
      newarr.push(arr[i])
    }
  }
  return newarr
}

function recFlatten2(arr){
  // 1. BASE CASE
  if(!Array.isArray(arr)){
    return arr
  }
  // 2. FORWARD PROGRESS
  var array = []
  for(var i =0; i < arr.length; i ++){
    // 3. RECURSIVE CALL
    array = array.concat(recFlatten(arr[i]))
  }
  return array
}


// [1,2,3,4,5,6] => [1,2,3,4,5,6]
// [1,2,[4,5],6] => [1,2,4,5,6]
// [2,2,[2,2,[2]], 2] => [2,2,2,2,2,2]

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
  // BASE CASE - RETURN FALSE IF ARR.LENGTH == 0
  if (sortedNums.length <= 0) return null;
  // CHOOSE OUR MIDDLE INDEX
  let mid = Math.floor(sortedNums.length / 2)
  // BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
  if (sortedNums[mid] === searchNum) return true;
  // FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
  // MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
  // dont forget we can use arr.slice() - look up the documentation
  if (sortedNums[mid] > searchNum) {
    return binarySearch(sortedNums.slice(0, mid), searchNum);
  }
  if (sortedNums[mid] < searchNum) {
    return binarySearch(sortedNums.slice(mid + 1, sortedNums.length), searchNum);
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
function risingSqauresNoArr(num){
  // BASE CASE
  if(num == 1){
    return [1]
  }
  // FORWARD PROGRESS
  // RECURSIVE CALL
  var arr = risingSqauresNoArr(num - 1)
  arr.push(num * num)
  return arr
}

console.log(risingSqaures(5)) // [1,4,9,16,25]

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
