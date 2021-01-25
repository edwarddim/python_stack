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

// WED
/* 
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
  Input: 2 arrays
  Output: 
*/
function twoNumSum(arr1, arr2){
    var array = []
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            array.push(arr1[i] + arr2[j]) 
        }
    }
    return array
}
var arr1 = [1,2,3]
var arr2 = [4,5,6]
conole.log(twoNumSum(arr1, arr2))
// EX. [1,2,3] , [4,5,6] => [5,6,7,6,7,8,7,8,9]








//FRI 
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return true or false.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
    // 1. Do arr.sort() wihtout using built-in functions.
    for(var x=0; x<arr.length; x++){
        if (arr[x] > arr[x+1]){
            var temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
            x = 0;
        } 
    }

    // 2. Check to see if the array is increasing by one integer each index
    //    *If this is not the case, return true.*
    //    *If it is consistently increasing by one, return false.*
    for (i=0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]-1){
            return true
        }
    }
    return false
}

console.log(missingValue([3,0,1,2]))
console.log(missingValue([4,0,2,1]))

// [3,0,1,2] => False
// [4,0,2,1] => True