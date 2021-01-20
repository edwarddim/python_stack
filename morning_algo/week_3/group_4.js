// MON
/* 
Balance Point
Write a function that returns whether the given
array has a balance point BETWEEN indices, 
where one side’s sum is equal to the other’s. 
*/


function balancePoint(arr){
    var sum = 0
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var bal = 0;
    for (var x=0; x<arr.length; x++){
        bal += arr[x];
        if(bal == sum/2){
            return true
        }
    }
    return false
}
console.log(balancePoint([1, 2, 3, 4, 10]))
console.log(balancePoint([9, 9]))
console.log(balancePoint([1, 2, 4, 2, 1]))

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [9,9] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE





function balanceIndex(arr){
    if (arr.length%2 == 0) {
        return -1
    }
    var sum = 0
    for (var i=0; i<arr.length; i++) {
        if (i == (arr.length - 1)/2){
            continue
        }     
        else {sum += arr[i]}
    }
    var bal = 0;
    for (var x=0; x<arr.length; x++){
        bal += arr[x];
        if(bal == sum/2){
            return x + 1
        }
    }
}


console.log(balanceIndex([-2, 5, 7, 0, 3]))
console.log(balanceIndex([9,0,9]))
console.log(balanceIndex([9,9]))

// EX. [-2, 5, 7, 0, 3] => 21
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target) {
  
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7))