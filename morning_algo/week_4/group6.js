
function recSumArr(arr, i = 0) {
  // 1. BASE CASE
  if(i == arr.length - 1){
    return arr[arr.length-1]
  }
  // 2. FORWARD PROGRESS (INCREMENT / DECRMENT)
  return arr[i] + recSumArr(arr,i=i+1)
  // 3. RECURSIVE CALL
}
console.log(recSumArr([1,2,3]))
// [1,2,3] => 6
// --------------