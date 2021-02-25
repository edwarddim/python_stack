// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
// function binarySearch(arr,target){
//     var lindex = 0
//     var rindex = arr.length-1
//     var midindx = Math.floor((lindex + rindex)/2)
//     // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
//     while(arr[midindx] != target && lindex < rindex){
//         if(target > arr[midindx]){
//             lindex = midindx+1
//         }
//         else if(target < arr[midindx]){
//             rindex = midindx-1
//         }
//         midindx = Math.floor((lindex + rindex)/2)
//     }
//     if(arr[midindx] == target){
//         return true
//     }
//     else{
//         return false
    // }
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
// }

function dedupeArr(arr){
    var arr1 = []
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[ (arr[i]) ] = true
    }
    for (let i = 0; i < arr.length; i++) {
        if ( arr1[arr[i]]){
            arr2+=arr[i]
            arr1[ (arr[i]) ] = false
        }
    }
return arr2
}
console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4,4]))

// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
/* function missingValue(arr){
    //iterate through arr
    //check values against a variable
    var check_this = 0;
    
    for (var i= 0; i<arr.length; i++){
        
        if (check_this in arr){
            //if variable is in arr, iterate variable and search again
            check_this+=1;
        }
        else {
            return true;
        }
    }
    return false;
} */
function missingValue(arr){
    //check arr.length against largest value in the array
    if (arr.length-1 == arr[arr.length-1]){

    }
}
// [3,0,1,2] => False
// [4,0,2,1] => True
console.log(missingValue([0,1,2,3,5,6]));
