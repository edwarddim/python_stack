var sum
function recursiveSigma(n) {
    // 1. BASE CASE
    if(n == 0){
        return n
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    n--
    // 3. RECURSIVE CALL
    return n+1 + recursiveSigma(n)
}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
console.log(recursiveSigma(5))



function recursiveSigma(n, sum) {
    // 1. BASE CASE
    if(n == 0){
        console.log(sum)
        return
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    sum += n
    n--
    // 3. RECURSIVE CALL
    recursiveSigma(n, sum)

}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
recursiveSigma(5, 0)

function recursiveSigma(n) {
    if (n == 0) {
        return n
    }
    return n + recursiveSigma(n - 1)
}

console.log(recursiveSigma(5))