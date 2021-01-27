Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer

SIGMA 3 => 3 + 2 + 1 => 6


var sum = 0
function recursiveSigma(n) {
    if(n == 0){
        sum += n
        console.log(sum)
        return
    }
    sum += n
    n--
    console.log(n)
    recursiveSigma(n)
}
console.log(recursiveSigma(3))
// 1. BAE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL

function sumArr(arr, i++) {
    // 1. BASE CASE  
    if(i == arr.length-1){
          return
      }
      sum += arr[i]
      // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
      i++
      // 3. RECURSIVE CALL
      return arr + sumArr(arr, i)
  }
  console.log(sumArr([1,2,3])) // 6
    // [1,2,3] => 6
  


function sumArr(arr, i = 0) {
    // 1. BASE CASE
    if (i === arr.length-1) {
        return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
    return arr[i] + sumArr(arr, i+1)
}
 // [1,2,3] => 6
console.log(sumArr([1,2,3,4]))

// TUE
/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    for(var i=0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        arr[i] is an array
      }
    }

    var arr1 = [1,2,3]
    var arr2 = [4,5,6]
    var arr3 = arr1.concat(arr2)
    console.log(arr3) => [1,2,3,4,5,6]
*/

function recFlatten(arr, arr2=[]){
    for (j=0; j < arr.length; j++){
        if (arr.isArray(arr[j]) == true){
            arr2 = arr2.concat(recFlatten(arr[j]))
        }
        else {
            arr2.push(arr[j])
        }
    }
    return arr2
}


// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
