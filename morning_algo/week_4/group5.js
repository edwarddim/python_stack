
/*
    RigSquGvanumbernry id wihsqasonersuptogivn nmbe
*/
fuctionigSquenum r = []{
// EX.3=>1,4,9//EX.5=>[1,4,9,16,25]
funcioigSqueNoA(um{
igSques5)) // 6

// THUR

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr = []){
  //base case
  if (num == 1){
    return num
  }
  //for loop
  for (var i = 1;i<=num;i++){
    arr.push(i**i)
  }
  return risingSqaures()?
}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]

function recFlatten(arr){
  returnArr = []
  //base case
  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      returnArr = returnArr.concat(recFlatten(arr[i]))
    }
    else {
      returnArr.push(arr[i])
    }
  }
  return returnArr

}


// [1,2,3,4,5,6] => [1,2,3,4,5,6]
// [1,2,[4,5],6] => [1,2,4,5,6]
// [2,2,[2,2,[2]], 2] => [2,2,2,2,2,2]

// console.log(recFlatten([ 1, [2,3,[4]] , 5 ]))
//            0     1        2
// LEVEL 1. [ 1, [2,3,[4]] , 5 ] => [1,2,3,4,5]

//           0   1   2
// LEVEL 2. [ 2 ,3, [4] ]


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
