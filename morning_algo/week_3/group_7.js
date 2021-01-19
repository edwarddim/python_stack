// Balance Point. Given array, return whether there is a 
// balance point between the indices, where one side's 
// sum is equal to the other's

function balancePoint(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    
    var balancepoint = sum/2 // balance point is 10
    var sumSoFar = 0
    for(var i = 0; i < arr.length; i++){
        sumSoFar += arr[i]
        if(sumSoFar == balancepoint){
            return true
        }
    }
    return false
}
arr1 = [1,2,3,4,10] // TRUE
arr = [1,2,2,1,3,1,1,1]
arr2 = [1,2,4,2,1] // FALSE
console.log(balancePoint(arr1))
console.log(balancePoint(arr2))
console.log(balancePoint(arr))

// Ignore the index and return the index number where there is a balance point. Return -1 if no balance index exists.
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1
function balanceIndex(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var sumSoFar = 0 //the left side of the array
    var remainder = 0 //the right side of the array
    //go through the array again, find out if the sum so far = the total sum minus arr[i]
    for(var i = 0; i < arr.length; i++){
        sumSoFar += arr[i]
        remainder = sum - sumSoFar
        if(sumSoFar - arr[i] == remainder){
            return i
        }
    }
    return -1
}
arr1 = [-2,5,7,0,3] // 2, (-2 + 5) = 3, (0 + 3) = 3, return that index (2)
arr2 = [9,0,9] // 1 9 = 9, return index where both sides equal
arr3 = [1,2,3,4]
console.log(balanceIndex(arr1))
console.log(balanceIndex(arr2))
console.log(balanceIndex(arr3))
// EX. [9,9] => -1
function balanceIndex(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var sumSoFar = 0
    r
    
    
    return -1
}
arr1 = [-2,5,7,0,3] // 2
arr2 = [9,0,9] // 1
console.log(balanceIndex(arr1))
console.log(balanceIndex(arr2))
// EX. [9,9] => -1
function balanceIndex(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var sumSoFar = 0
    
    
    
    return -1
}
arr1 = [-2,5,7,0,3] // 2
arr2 = [9,0,9] // 1
console.log(balanceIndex(arr1))
console.log(balanceIndex(arr2))

