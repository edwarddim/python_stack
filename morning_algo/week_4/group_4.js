// MON


function iteratePrint(num){
    for(var i= num ; i >=0 ; i--){
      console.log(i)
    }
  }
  iteratePrint(5)
  
  // FUNCTION DEFINED
  function recursivePrint(num){
    // 1. BASE CASE
    if(num == 1){
      console.log(num)
      return "hELLO"
    }
    console.log(num)
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    num--
    // 3. RECURSIVE CALL
    recursivePrint(num)
  }
  // FUNCTION CALLED
  recursivePrint(3)
  
  // 1, BASE CASE
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  
  /* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
  */



 sum = 0
 function recursiveSigma(num) {
   if(num == 1){
       sum += num
       console.log(sum)
       return
   }
   sum += num
   num--
   recursiveSigma(num)
 }
 // 5 => 5 + 4 + 3 + 2 + 1 => 15
 recursiveSigma(3) // 6
 recursiveSigma(5)
 recursiveSigma(10)
 recursiveSigma(20)







  /* 
    Recursively sum an arr of ints
  */


sum = 0
function sumArr(arr, i=0) {
    if(i == arr.length-1){
        sum += arr[i]
        console.log(sum)
        return
    }
    sum += arr[i]
    i++
    sumArr(arr, i)
}
 sumArr([1,2,3]) // 6
  // [1,2,3] => 6
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  

  function sumArr(arr, i = 0) {
    // 1. BASE CASE
    if(i == arr.length - 1){
      return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT
    // i + 1
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, i+1)
  }
  // [1,2,3] => 6
  console.log(sumArr([1,2,3]))
  console.log(sumArr([1,2,1,2,1,2]))