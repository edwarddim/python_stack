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
  recursivePrint(5)
  
  // 1, BASE CASE
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  
  /* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
  */
  function recursiveSigma(n) {
    
  }
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
  
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // TUE
  /* 
    Recursively sum an arr of ints
  */
  
  function sumArr(arr, i = 0) {
  
  }
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
function recFlatten2(arr, index = 0){
  result = []
  //base case: pointer at last index of array
  if(index == arr.length - 1){
    if(Array.isArray(arr)) {
      return recFlatten(arr[index]);
    } else {
      return arr;
    }
  } else if(Array.isArray(arr[index])) {
    result = result.concat(recFlatten(arr[index]))
  }
  result.push(arr[index]);
  return result.concat(recFlatten(arr, index + 1));
}

console.log(recFlatten([1,[2,3,[4]],5]));

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
// [1,2,3,1,[2,3,[4]],1]
 
function recFlatten(arr) {
  newArray = []
  if(arr.length == 1){
    if(!Array.isArray(arr[0])){
      return arr;
    } else {
      return recFlatten(arr[0]);
    }
  }
  if(Array.isArray(arr[0])){
    newArray = newArray.concat(arr[0]);
  } else {
    newArray.push(arr[0]);
  }
  return newArray.concat(recFlatten(arr.slice(1)));
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
// LEVEL 1 [1,2,3,4,5,6,7,8,9] ,  8
// LEVEL 2 [6,7,8,9] , 8
// LEVEL 3 [8,9] , 8

function recursiveBinary(arr, target){
  // FIND THE MIDDLE NUMBER OF THE ARRAY
  // CHECK TO SEE IF TARGET IS THE MIDDLE NUMBER
  // IF TARGET IS LESS THAN, CUT LEFT HALF OF ARRAY AND RECURSIVE CALL
  // IF TARGET IS GREATER THAN, CUT RIGHT HALF OF ARRAY AND RECRUSIVE CALL
  // Base
  if (arr.length === 1){
    return arr[0] === target
  }
  // Forward Progress
  if (target >= arr[Math.trunc(arr.length / 2)]) {
    // keep the right half
    arr = arr.slice(Math.trunc(arr.length / 2))
  }
  else {
    // else keep the left
    arr = arr.slice(0, Math.trunc(arr.length / 2))
  }
 
  // recursive call
  return recursiveBinary(arr, target)
}


console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 4))