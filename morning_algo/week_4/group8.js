function recursiveSigma(n) {
    // BASE CASE
    if (n == 1) {
        return n
    }
    
    // FORWARD PROGRESS (INCREMENT / DECRMENT)
    sum = n
    n--
    // RECURSIVE CALL
    sum += recursiveSigma(n)
    return sum
  }

  function recFactorial(num){
    //base case
    if (num == 2){
        return num
    }
    //forward progress
    total = num
    num--
    // recursive call
    total *= recFactorial(num)
    return total
}