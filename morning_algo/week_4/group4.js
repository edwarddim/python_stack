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


/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
    .slice(start(inclusive), end(exclusive))
    var name = "edward"
    var part = name.slice(2,7)
*/
// HINT: YOU'RE GOING TO NEED A FOR LOOP



  // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
  function stringSubset(string, arr) {
    if (string.length == 1) {
      arr.push(string)
      return arr
    }
    for (let i = 0; i < string.length; i++) {
      arr.push(string.slice(i, string.length))
    }
    return stringSubset(string.slice(0, string.length-1), arr)
  }
  console.log(stringSubset("abcd", []))
  // FOR LOOP




// console.log(stringSubset("abcd"))
// console.log("HELLO WORLD")

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]



// THUR

/* 
    Rising Square
    Given a number, return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr = []){

}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]
function risingSqauresNoArr(num){

}

console.log(risingSqaures(5)) // [1,4,9,16,25]