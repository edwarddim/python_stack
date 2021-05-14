
function recFlatten(arr){
  // 1. Base Case
  if (!Array.isArray(arr)){
    return arr
  }

  // 2. Forward Progress
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    // 3. Recursive Call
    newArr = newArr.concat(recFlatten(arr[i]))
  }
  return newArr
}

// [1,2,3,4,5,6] => [1,2,3,4,5,6]
// [1,2,[4,5],6] => [1,2,4,5,6]
// [2,2,[2,2,[2]], 2] => [2,2,2,2,2,2]

// console.log(recFlatten([ 1, [2,3,[4]] , 5 ]))
//            0     1        2
// LEVEL 1. [ 1, [2,3,[4]] , 5 ] => [1,2,3,4,5]

//           0   1   2
// LEVEL 2. [ 2 ,3, [4] ]


g