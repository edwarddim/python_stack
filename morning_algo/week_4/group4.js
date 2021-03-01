/* 
  Recursively sum an arr of ints
*/

function iterateSumArr(array){
    var sum = 0
    for(var i = 0; i <array.length;i++){
      sum += arr[i]
    }
    return sum
  }
  
  function recSumArr(arr, i = 0) {
    // 1. BASE CASE
    if(i == arr.length - 1){
        return arr[arr.length-1]
    }
    return arr[i] + recSumArr(arr, i=i+1)
    // 2. FORWARD PROGRESS (INCREMENT / DECRMENT)
    // 3. RECURSIVE CALL
  }
  console.log(recSumArr([1,2,3,4], 0))
  // [1,2,3] => 6