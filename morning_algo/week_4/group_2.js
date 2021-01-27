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




// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = arr1.concat(arr2)
// console.log(arr3) => [1,2,3,4,5,6]
// */

function recFlatten(arr){
  // can use Array.isArray() in the base case to see if arr is actually an array
  if(Array.isArray(arr)){
    return true
    console.log(arr)
  }
    else{
      return false
    }
var arr3 =arr1.concat(arr2)
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]