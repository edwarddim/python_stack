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