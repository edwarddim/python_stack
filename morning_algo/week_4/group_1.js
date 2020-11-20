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
var sum = 0
function recursiveSigma(n) {
    console.log(n)
    if(n==0){
        return
    }
    sum += n
    n -=1
    recursiveSigma(n)
    return sum
}

console.log(recursiveSigma(5))

function recursiveSigma(n) {
    if(n==0){
        return n
    }
    // DO SOMETHING
    return recursiveSigma(n-1)
    // we want something that acts like a var to hold whats in line 43
}

console.log(recursiveSigma(5))

  // 5 => 5 + 4 + 3 + 2 + 1 => 15
  

  /*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
    .slice(start(inclusive), end(exclusive))
    var name = "edward"
    var part = name.slice(2,7)
*/
//  

// 
//
//
//
function stringSubset(string, arr){
  // HINT: YOU'RE GOING TO NEED A FOR LOOP
  // 1, BASE CASE
  if (string.length == 0) {
    return arr
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  for (var i = string.length; i >= 0; i--) {
    arr.push(string.slice(0, i))
  }
  // 3. RECURSIVE CALL
 return stringSubset(string.slice(0, string.length-1), arr)
}

console.log(stringSubset("ABC", []))
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
  
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]


function recursiveBinary(arr, target) {
  middle_num=[]
  if (arr.length = arr.length/2) 
  // we need a math.floor on line 109 so that when the array is cut in have and is odd 
  array= Math.floor(arr.length/2)
    
  // FIND THE MIDDLE NUMBER OF THE ARRAY
  // CHECK TO SEE IF TARGET IS THE MIDDLE NUMBER
  // IF TARGET IS LESS THAN, CUT LEFT HALF OF ARRAY AND RECURSIVE CALL
  // IF TARGET IS GREATER THAN, CUT RIGHT HALF OF ARRAY AND RECRUSIVE CALL
}

function recursiveBinary2(arr, target) {
  middle = arr[Math.trunc(arr.length / 2)];
  if(middle == target){
    return true;
  }
  if(arr.length == 1) {
    if(arr[0] == target) {
      return true;
    } else {
      return false;
    }
  }
  if(middle == target) {
    return true;
  } else if(target < middle){
    newMiddle = Math.trunc(arr.slice(0, middle)/2); 
    return recursiveBinary2(arr.slice(0, middle), newMiddle);
  } else {
    newMiddle = Math.trunc(arr.slice(middle)/2));
    return recursiveBinary2(arr.slice(middle), newMiddle);
  }
}
console.log(recursiveBinary2([1,2,3,4,5,6,7,8,9,10], 5));