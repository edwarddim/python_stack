
// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    let leftIdx = 0
    let rightIdx = arr.length - 1
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor(((leftIdx+rightIdx)/2))
        if (arr[middleIdx] == target){
            return true
        }
        else if (arr[middleIdx] < target) {
            leftIdx = middleIdx + 1
        }
        else {
            rightIdx = middleIdx - 1
        }
    }
    return false
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET AS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }
  
  
  
