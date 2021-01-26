Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer

SIGMA 3 => 3 + 2 + 1 => 6


var sum = 0
function recursiveSigma(n) {
    if(n == 0){
        sum += n
        console.log(sum)
        return
    }
    sum += n
    n--
    console.log(n)
    recursiveSigma(n)
}
console.log(recursiveSigma(3))
// 1. BAE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

function sumArr(arr, i++) {
    // 1. BASE CASE  
    if(i == arr.length-1){
          return
      }
      sum += arr[i]
      // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
      i++
      // 3. RECURSIVE CALL
      return arr + sumArr(arr, i)
  }
  console.log(sumArr([1,2,3])) // 6
    // [1,2,3] => 6
  


function sumArr(arr, i = 0) {
    // 1. BASE CASE
    if (i === arr.length-1) {
        return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, i+1)
}
 // [1,2,3] => 6
console.log(sumArr([1,2,3,4]))