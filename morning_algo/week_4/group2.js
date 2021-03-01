/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  var sum = 0;
    // BASE CASE
    // FOR THIS ALGO, IN THE BASE CASE YOU WANT TO RETURN A nBER
    if(n == 0){
      return n;
    }
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    console.log(i)
    // sum += n;
    n --;
    // RECURSIVE CALL
    return n +recursiveSigma(n-1); // YOU ALSO WANT ADD THE nBERS BEING RETURNED
    console.log(n)

  }
recursiveSigma(3)

  


  // 5 => 5 + 4 + 3 + 2 + 1 => 15
  
  
  // 3 => 3 * 2 * 1 => 6
  // 4 => 4 * 3 * 2 * 1 => 24
  function iterativeFactorial(n){
  
  }
  
  function recFactorial(n){
  
  }
  // recFactorial(3)

var sum = 0;
function recursiveSigma(n) {
    // BASE CASE
    if (n == 0) {
        return
    }
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    sum += n
    n--
    // RECURSIVE CALL
    recursiveSigma(n)
    return sum
}
console.log(recursiveSigma(5))
// console.log(recursiveSigma(3))

var sum = 1;
function recFactorial(num){
    // BASE CASE
    if (num == 0) {
        return
    }
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    sum *= num
    num--
    // RECURSIVE CALL
    recFactorial(num)
    return sum
}
// console.log(recFactorial(4))
console.log(recFactorial(3))

function recSumArr(arr, i = 0) {
  // 1. BASE CASE
  function recSumArr(arr, i = 0) {
    if (arr.length === 1) {
        return arr[0];
    }
    else {
        return arr.pop() + recSumArr(arr)
    }
}
console.log(recSumArr([1,2,3,4]))
// [1,2,3] => 6


function recSumArr(arr, i = 0) {

  if (arr.length === 1) {
      return arr[0];
  }
  else {
    // you don't want to .pop(), that removes numbers from the array
      return arr.pop() + recSumArr(arr)
  }
}
console.log(recSumArr([1,2,3,4]))
