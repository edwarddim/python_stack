// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
    var sum = 0
    let left_sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    for (let j = 0; j < arr.length; j++) {
        sum-= arr[j]
        left_sum += arr[j]
        if (left_sum === sum) {
            return true
        }
        
    }
    return false;
}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    var left = arr[0];
    var right = arr[arr.length-1];
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    var middle = left + right % 2;
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }