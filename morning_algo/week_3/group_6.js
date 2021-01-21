// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
for (var i = 0; i<arr.length; i++){
      if (arr.length % 2 == 0){
        return true
      }
      else {
        return false
      }        
  }
}
console.log(balancePoint([1, 2, 3, 4, 10]))
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [9,9] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1



/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
  var L_i = 0
  var R_i = arr.length-1


  while (R_i-L_i > 1){

    mid = Math.round(R_i/2)+L_i
    
    if (mid != target){

      if (target > mid ){
        R_i = mid
        console.log("R"+R_i)
      } else {
        L_i = mid
        console.log("R"+L_i)
      }

    } else {
      return true
    }

  }
  return false
}

binarySearch([1,2,3,4,5,6,7,8,9], 3)




// WED
/* 
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
  Input: 2 arrays
  Output: 
*/
function twoNumSum(arr1, arr2){
  var sums = []
  for (var i=0; i<arr1.length; i++){
    for (var j=0; j<arr2.length; j++){
      sums.push(arr1[i]+arr2[j])
    }
  }
  return sums
}
console.log(twoNumSum([1,2,3] , [4,5,6]))

// EX. [1,2,3] , [4,5,6] => [5,6,7,6,7,8,7,8,9]
