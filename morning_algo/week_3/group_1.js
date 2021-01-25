function balancePoint(arr){
    if(arr.length < 2) return false
    var leftInd = 0;
    var rightInd = arr.length-1;
    var leftSum, rightSum = 0
    while(leftInd <= rightInd){
        if(leftSum <= rightSum){
            leftSum += arr[leftInd]
            leftInd++
        }
        else {
            rightSum += arr[rightInd]
            rightInd--
        }
    }+


    // WED
/* 
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
  Input: 2 arrays
  Output: 
*/
function twoNumSum(arr1, arr2){
    var arr3 = []
    for(var i of arr1) {
        for(var j of arr2) {
            arr3.push(i + j)
        }
    }
    return arr3
}
console.log(twoNumSum([1,2,3] , [4,5,6]))


// EX. [1,2,3] , [4,5,6] => [5,6,7,6,7,8,7,8,9]

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return true or false.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
    var len = arr.length - 1
    for(var i = 0; i < arr.length; i++){
        if((arr[i] > len) || (arr[i] < 0)){
            return true
        }
    }
    return false
}
// => False
//  => True
var arr1 =  [3,0,1,2]
var arr2 = [4,0,2,1]
console.log(missingValue(arr1))
console.log(missingValue(arr2))