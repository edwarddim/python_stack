// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    var leftInd = 0
    var rightInd = arr.length-1
    while (leftInd <= rightInd) {
        var midInd = Math.floor((rightInd + leftInd) / 2)
        // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
        if (target == arr[midInd]) {
            // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
            return true
        }
        else if (target < arr[midInd]) {
            // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
            rightInd = midInd - 1
        }
        else {
            // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
            leftInd = midInd + 1
        }
    }
    return false
}
console.log(binarySearch([1,2,3,4,5,10], 4))
  