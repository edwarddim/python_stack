// function iterateSumArr(array){
//     var sum = 0
//     for(var i = 0; i <array.length;i++){
//       sum += arr[i]
//     }
//     return sum
// }
// function recSumArr(arr, i = 0) {
//     // 1. BASE CASE
//     if(i == arr.length - 1){
//       return arr[i]
//     }
//     return arr[i] += recSumArr(arr, i + 1)
// }
// console.log(recSumArr([1,2,3,4], 0))

function stringSubset(string, arr = []){
  // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
  if (string.length == 1) {
    arr.push(string)
    return arr
  }
  for (let i = string.length; i > 0; i--) {
    arr.push(string.slice(0, i))
  }
  return arr.concat(stringSubset(string.slice(1)))
  // Forward progress
  // Recursive call
  // FOR LOOP
}

function stringSubsetNoArr(string){

}
// console.log(stringSubset("abcd"))
// console.log("HELLO WORLD")

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]