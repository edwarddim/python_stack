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
      return arr[i]
    }
    return arr[i] += recSumArr(arr, i + 1)
}
console.log(recSumArr([1,2,3,4], 0))