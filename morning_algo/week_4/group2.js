
//   // recFactorial(3)

// var sum = 0;
// function recursiveSigma(n) {
//     // BASE CASE
//     if (n == 0) {
//         return
//     }
//     // FORWARD PROGRESS (INCREMENT / DECRMENT)
//     sum += n
//     n--
//     // RECURSIVE CALL
//     recursiveSigma(n)
//     return sum
// }
// console.log(recursiveSigma(5))
// // console.log(recursiveSigma(3))

// var sum = 1;
// function recFactorial(num){
//     // BASE CASE
//     if (num == 0) {
//         return
//     }
//     // FORWARD PROGRESS (INCREMENT / DECRMENT)

//     sum *= num
//     num--
//     // RECURSIVE CALL
//     recFactorial(num)
//     return sum
// }
// // console.log(recFactorial(4))
// console.log(recFactorial(3))

// function recSumArr(arr, i = 0) {
//   // 1. BASE CASE
//   function recSumArr(arr, i = 0) {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     else {
//         return arr.pop() + recSumArr(arr)
//     }
// }
// console.log(recSumArr([1,2,3,4]))
// // [1,2,3] => 6


// function recSumArr(arr, i = 0) {

//   if (arr.length === 1) {
//       return arr[0];

//   }
//   else {
//     // you don't want to .pop(), that removes numbers from the array
//       return arr.pop() + recSumArr(arr)
//   }
// }
// console.log(recSumArr([1,2,3,4]))


function recursiveBinary(arr, target){
  // BASE CASE - RETURN FALSE IF ARR.LENGTH == 0
  if (arr.length <= 1){
    if (arr[0] == target){
      return true
    }
    return false
  }
  let midIdx = Math.floor((arr.length - 1) / 2)
  if (arr[midIdx] == target){
      return true
  }
  else if (arr[midIdx] > target){
      return recursiveBinary(arr.slice(0, midIdx), target)
  }
  else {
      return recursiveBinary(arr.slice(midIdx+1, arr.length), target)
  }
  
}

  // CHOOSE OUR MIDDLE INDEX
  // BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
  // FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
  // MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
  // dont forget we can use arr.slice() - look up the documentation

console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))


/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr = []){

}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]
function risingSqauresNoArr(num){

}

console.log(risingSqaures(5)) // [1,4,9,16,25]