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