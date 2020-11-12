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

// 


// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

// center: 2, 3
// left: 0, 2
// right: 4
// while condition: 2, 
// target: 4

function binarySearch(arr,target){
  arr.sort()
  var center = Math.floor(arr.length/2);
  var left = 0;
  var right = arr.length -1
  while(right - left > 1) {
    if(arr[center] == target || arr[left] == target || arr[right] == target) {
      return true;
    }
    if(arr[center] < target) {
      left = center;
    } else {
      right = center;
    }
    center = Math.floor((right + left) /2);
  }
  return false;
}

console.log(binarySearch([1,2,3,4,7,8,10], 4));

// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
  var sumOfArr = 0;
  var expectedSum = 0;
  for(var i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
    expectedSum += i;
  }
  return sumOfArr != expectedSum;
}

console.log(missingValue([3,0,1,2]))
// [3,0,1,2] => False
// [4,0,2,1] => True

// Find next largest number using the same digits within said number
// example
// 1234 => 1243
// 4321 => false

function superHardAlgo(int){
  var arr = int.toString().split('')
  for(var i = arr.length -1; i > 0; i--) {
    if(arr[i] > arr[i - 1]) {
      var temp = arr[i];
      arr[i] = arr[i-1]
      arr[i-1] = temp;
      return parseInt(arr.join(''))
    }
  }
  return "its the biggest one";

}

console.log(superHardAlgo(1234));

//218765 =>  251678  ; 281765
//2128765 => 2152678

function superHardAlgo2(int){
  var arr = int.toString().split('')
  for(var i = arr.length -1; i > 0; i--) {
    if(arr[i] > arr[i - 1]) {
      arrToSort = arr.slice(i-1);
      sorted = arrToSort.sort()
      return arr.slice(0,i).concat(sorted)
    }
  }
  return "its the biggest one";

}

console.log(superHardAlgo(1234));