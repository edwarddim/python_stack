

/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array

  DO ALGO WITH ONE FOR LOOP AND NO OBJECT TO KEEP TRACK OF FREQUENCY
  Bonus: do it in O(n) time (no nested loops, new array ok)
  arr.splice(index, num)
*/
function dedupeArr(arr){
    let output = []

    for (let i = 0; i < arr.length; i++) {
        if (output.indexOf(arr[i]) == -1) { // if arr[i] not in output arr
            output.push(arr[i])             
        }
    }
    return output
}
// console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
// EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]

let testarr = [1,1,1,2,2,2,3,3,4,4,4,5,5,5]

console.log(dedupeArr(testarr))


function dedupeArr(arr){
    for(var i = arr.length -1; i > 0; i--) {
      if(arr[i] == arr[i-1]){
        arr.splice(i, 1);
      }
    }
    return arr;
  }

let testarr1 = [1,1,1,2,2,2,4,4,4,5,5,5]

console.log(dedupeArr(testarr1))
  
  