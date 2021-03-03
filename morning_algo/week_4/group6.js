
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


// HINT: YOU'RE GOING TO NEED A FOR LOOP
function stringSubset(string, arr = []){
  // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
  // FOR LOOP
}

function stringSubsetNoArr(string){

}
// console.log(stringSubset("abcd"))
// console.log("HELLO WORLD")

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]