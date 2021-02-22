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
        sumright = sumright + arr[j]
    }
    for (var n = 0; n<i; n++){
        sumleft=sumleft + arr[n]
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