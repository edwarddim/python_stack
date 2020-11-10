// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
// each side of the array at the balance point adds up to the same number
// for loop that moves one direction, the other moves backwards, each add up each sum. 
  var i = 0;
  var j = arr.length-1;
  var sum1 = arr[i];
  var sum2 = arr[j];
  while (i < j) {
    if (i == j-1) {
      break
    }
    if (sum1 < sum2) {
      i++
      sum1+=arr[i]
    } else {
      j--
      sum2+=arr[j]
    }

    console.log('I: ' + i, 'J: '+ j,'sum1: ' + sum1, 'sum2: ' + sum2)
  }
  if (sum1 === sum2) {
    return true
  }


  return false
}
// [1,2,3,4,10]

    // var j = arr.length -1 
    // var sumI = 0
    // var sumJ = 0
    // for (var i = 0; i < arr.length; i++){
    //    sumI += arr[i]
    //    sumJ += arr[j] 
    //    if ( sumI == sumJ ){
    //        return arr[i]
    //    }
    // }
//compare the sums, and stop when they are equal
// return that given index of i 

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// h