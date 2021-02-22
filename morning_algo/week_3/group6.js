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