/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
    // BASE CASE
    if (n == 1) {
        return n
    }
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    return n + recursiveSigma(n-1)
    console.log(n)

    // RECURSIVE CALL
  }
  console.log(recursiveSigma(5))
  // console.log(recursiveSigma(3))
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
  
  
  // 3 => 3 * 2 * 1 => 6
  // 4 => 4 * 3 * 2 * 1 => 24
function iterativeFactorial(num){
    if (n == 1) {
        return n
    }
    return n * recursiveFactorial(n - 1)
  }
return recursiveFactorial(3)
  

function recursiveFactorial(num){
    // BASE CASE
    if (num == 1) {
        return num
    }
    // FORWARD MOTION + RECURSIVE CALL
    return num * recursiveFactorial(num - 1)
}
console.log(recursiveFactorial(3))



function recFactorial(num){

}
recFactorial(3)