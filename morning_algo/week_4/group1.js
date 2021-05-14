/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    Array.concat() will also come in handy
    var array1 = [1,2,3]
    var array2 = [4,5,6]
    var array3 = array1.concat(array2)
    console.log(array3) => [1,2,3,4,5,6]
*/
function recFlatten(arr){
  // BASE CASE
  if(!Array.isArray(arr)) {
    return [arr];
  }

  // Flattened arr
  let flattendArr = []
  for( let i = 0; i < arr.length; i++) {
    flattendArr = flattendArr.concat(recFlatten(arr[i]));
  }

  return flattendArr;

}


// [1,2,3,4,5,6] => [1,2,3,4,5,6]
// [1,2,[4,5],6] => [1,2,4,5,6]
// [2,2,[2,2,[2]], 2] => [2,2,2,2,2,2]

console.log(recFlatten([ 1, [2,3,[4]] , 5 ]))
//            0     1        2
// LEVEL 1. [ 1, [2,3,[4]] , 5 ] => [1,2,3,4,5]

//           0   1   2

