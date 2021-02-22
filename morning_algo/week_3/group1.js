// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
    let left = 0
    let right = 0
    for(let i = 0; i < arr.length; i++) {
        left += arr[i]
        for (let j = i+1; j<arr.length; j++) {
            right += arr[j]
        }
        if (left==right) {
            return true
        }
        right = 0
    }
    return false
}


// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
    let left = 0
    let right = 0
    for(let i = 1; i < arr.length; i++) {
        left += arr[i-1]
        for (let j = i+1; j<arr.length; j++) {
            right += arr[j]
        }
        if (left==right) {
            return i
        }
        right = 0
    }
    return -1
}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
