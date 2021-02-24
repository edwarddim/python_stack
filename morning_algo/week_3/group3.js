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
	for (let i = 0; i < arr.length-1; i++) {
		if (arr[i] == arr[i+1]){
      arr.splice(i,1)
      i--
    }
  }
  return arr
}


console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))
//EX. [1,1,1,2,2,2,3,3,4,4,4] => [1,2,3,4]



//FUNCTION USING NEW ARRAY
// function dedupeArr(arr) {
//     newArr = [];
//     for (var i=0; i<arr.length; i++) {
//         if (arr[i] == arr[i+1]) {
//             console.log('pass');
//         }
//         else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// var array1 = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,7,7,7,7];
// console.log(dedupeArr(array1));

