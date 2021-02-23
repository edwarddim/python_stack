// // MON
// /* 
//   Balance Point
//   Write a function that returns whether the given
//   array has a balance point BETWEEN indices, 
//   where one side’s sum is equal to the other’s. 
// // */
// // function balancePoint(arr){
// //         var leftInd = 0
// //         var rightInd = arr.length-1
// //         var leftSum = 0
// //         var rightSum = 0
// //         while(leftInd <= rightInd) {
// //             if (leftSum <= rightSum) {
// //                 leftSum += arr[leftInd]
//                 leftInd++
//             }
//             else {
//                 rightSum += arr[rightInd]
//                 rightInd--
//             }
//         }
//         if (leftSum == rightSum) {
//             return true
//         }
//         else {
//             return false
//         }
// }
// console.log(balancePoint([1, 2, 4, 2, 1]))
// // EX. [1, 2, 3, 4, 10] => TRUE
// // // EX. [1, 2, 4, 2, 1] => FALSE

// [1,2,3,4,5,6,7,8,9]
// function balanceIndex(arr){
// var left_index = 0;
// var right_index = arr.length - 1;




// Lef of the index is i[0] and right is arr.length-1

// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1


function binarySearch(arr,target){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    var target = 4;
    var left_index = 0;
    var right_index = arr.length - 1;

    while (left_index <= right_index) {
        // you need to compare the values, arr[left_index] with values
        if (left_index < target){
            left_index ++
        }
    else (right_index > target);
            right_index --
    }
    return target
    }
console.log(arr)