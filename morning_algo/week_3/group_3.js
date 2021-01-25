


function balancePoint(arr){



    for (var i=0; i<arr.length; i++){
        var LSum = 0
        var RSum = 0

        for (var L=0;L<i L++){
            LSum += arr[L]
        }

        for (var R=i;R<arr.length;R++){
            RSum += arr[R]
        }
        console.log(LSum + " "+RSum)
    }

}
balancePoint([1, 2, 4, 2, 1])


function balancePoint(arr){
    var sumLeft = 0
    var sumRight = 0
    var startRight = arr.length - 2
    console.log(startRight)
    
    for (j=startRight; j>= 0; j--){
        for (i=0; i<=startRight; i++){
            sumLeft += arr[i]
        }
        for (i=arr.length-1; i> startRight; i--){
            sumRight += arr[i]
        }
        if (sumLeft == sumRight){
            return true
        }
    }
    return false
}

console.log(balancePoint([1, 2, 3, 4, 10]))
console.log(balancePoint([9,9]))
console.log(balancePoint([1, 2, 4, 2, 1]))

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [9,9] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

[1,2,3,4,5,5]

function balanceIndex(arr){

    if(arr.length %2 == 0 ){
        return -1

    } else {
        for (var i=0; i<arr.length; i++){
            if(arr[i] %2 == 0){
                
                var LSum = 0
                var RSum = 0

                for (var L=0;L<i; L++){
                    LSum += arr[L]
                }

                for (var R=i+1;R<arr.length;R++){
                    RSum += arr[R]
                }
                if (LSum == RSum) {
                    return i
                }

            } else {
                continue
            }

        }

        return -1
    }
}

// TUE
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){

}









// THURS
/* 
  Given two arrays, return an array filled with the sum of
  each combination of numbers from the arrays
  Input: 2 arrays
  Output: 
*/
function twoNumSum(arr1, arr2){
    var newArr = []
    for (i=0; i<arr1.length; i++){
        for (j=0; j<arr2.length; j++){
            newArr.push(arr1[i] + arr2[j])
        }
    }
    return newArr
}

var arr1 = [1,2,3]
var arr2 = [4,5,6]

console.log(twoNumSum(arr1, arr2))

// EX. [1,2,3] , [4,5,6] => [5,6,7,6,7,8,7,8,9]


Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return true or false.
NO SORT ALLOWED
EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
    var temp1 = 0;
    for (i=0; i < arr.length; i++) {
        temp1 = arr[1]
        if (arr.index(temp1+1)) {
            temp1++
        }
        else {
            return true
        }  
    }
    return false
}
// [0,3,1,2] => False
// [4,0,2,1] => True