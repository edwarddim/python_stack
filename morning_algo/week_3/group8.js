// Balance Point
// Write a function that returns whether the given
// array has a balance point BETWEEN indices, 
// where one side’s sum is equal to the other’s. 

function balancePoint(arr){
    //Find the sum of the whole array
    //sum through the array until the value is half of the total sum
          //return true
      //return false
      var sum=0;
      for (let i = 0; i < arr.length; i++) {
          sum+=arr[i]
      }
      partialsum=0;
    for (var i=0; i<arr.length; i++){
        partialsum+=arr[i]
        if (partialsum == sum/2){
            return true
        }
    }
    return false
}

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
    for (var i=0; i<arr.length; i++){
        var sumleft = 0;
        var sumright = 0;
    for (var j=i+1; j<arr.length; j++){
        sumleft = sumleft + arr[j]
    }
    for (var n = 0; n<i; n++){
        sumright=sumright + arr[n]
    }
    if (sumleft == sumright){
        return i
    }
    }
    return -1
}


// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1


/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    let startIndx = 0;
    
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }   
  
  
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
    
    }
    // 1. FIND THE MIDDLE INDEX OF L AND R POINTER
    // 2. WITH THE MIDDLE INDEX, COMPARE THE MIDDLE VALUE WITH THE TARGET
    // THE TARGET IS EQUAL TO MIDDLE VALUE => return true
    // THE TARGET IS LESS THAN THE MIDDLE VALUE => MOVE THE RIGHT POINTER ONE LEFT OF MIDDLE INDEX
    // THE TARGET IS GREATER THAN MIDDLE VALUE => MOVE THE LEFT POINTER ONE RIGHT OF THE MIDDLE INDEX
  }