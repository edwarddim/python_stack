function recursiveSigma(n, o=0) {


    // console.log(n+" "+o)

    if (n == 0){
        console.log(o)
    }


    o += n

    n--
    recursiveSigma(n, o)

    

}
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
recursiveSigma(5)


function sumArr(arr, i = 0) {
  // 1. BASE CASE
  sum = 0;
  if (i = arr.length) {
      sum += i
  }
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  
  // 3. RECURSIVE CALL
}
sumArr(arr, i+1  )
// [1,2,3] => 6
console.log(sumArr([1,2,3]))
