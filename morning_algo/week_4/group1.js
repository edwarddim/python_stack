/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  // BASE CASE
  if (n==0){
      return
  }
  // FORWARD PROGRESS (INCREMENT / DECRMENT)

  // RECURSIVE CALL
  recursiveSigma(n-1)
}

function recursiveSigma2(n){
    if (n==1){
        return 1
    }
    //return (n + (n-1) + (n-2)...)
    return n +recursiveSigma2(n-1)
}
// console.log(recursiveSigma(5))
// 5 => 5 + 4 + 3 + 2 + 1 => 15


// 3 => 3 * 2 * 1 => 6
// 4 => 4 * 3 * 2 * 1 => 24
function iterativeFactorial(num){
    var prod = 1
    for (let i = num; i > 0; i--) {
       prod*=i
    }
    return prod
}

function recFactorial(num){
    if (num==1){
        return 1
    }
    //return (n * (n-1) * (n-2)...)
    return num * recursiveSigma2(num-1)
}
// recFactorial(3)

