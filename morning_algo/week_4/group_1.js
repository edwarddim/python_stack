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
  