function recursivePrint(number){
    // 1, BASE CASE (END OF THE RECURSION)
    console.log(number){
        if(number == 0){
            return 1
    }
    else{
        // (n-1) * n 
      var answer = (number - 1) * number
    }
    return answer 
console.log(recursivePrint(5))



// WEDNESDAY

function stringSubset(string, arr=[]){
    result = [];
    var subset = string;
    for(var j = 0; j < string.length; j++) {
        subset = string.slice(j);
        console.log(subset);
        for(var i = subset.length; i > 0; i--) {
            result.push(subset.slice(0, i))
        }
    }
    return result;
}

console.log(stringSubset('test'));

function stringSubsetRec(string){
    var arr = [];
    if(string.length == 1){
        console.log('last string: ' + string);
        return arr.push(string);
    }
    for(var i = string.length; i > 0; i--) {
        arr.push(string.slice(0, i))
    }
    console.log(string)
    var subset = string.slice(1);
    return arr.concat(stringSubsetRec(subset));
}

console.log(stringSubsetRec('test'));

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    Array.concat() will also come in handy
    var array1 = [1,2,3]
    var array2 = [4,5,6]
    var array3 = array1.concat(array2)
    console.log(array3) => [1,2,3,4,5,6]
*/

// arr = [1,[2,3,[4, 5]],6]
// newArr = [1, 2, 3, 4, 5]
//

function recFlatten(arr){
    var newArr = []
    // base case
    // CHECK IF arr IS ARRAY
    if (!Array.isArray(arr)) {
        // NOT ARRAY --> RETURN arr AS AN ARRAY
        return [arr]
    }
    // IS ARRAY --> CONCAT EACH VALUE IN SUBARRAY
    for (var i = 0; i < arr.length; i++) {
        newArr = newArr.concat(recFlatten(arr[i]))
    }
    return newArr
}

console.log(recFlatten([1,[2,3,[4]],5]))

// Array.isArr(arr[0])
// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
//
//
function recursiveBinary(arr, target) {
    // FIND THE MIDDLE NUMBER OF THE ARRAY
    // CHECK TO SEE IF TARGET IS THE MIDDLE NUMBER
    // IF TARGET IS LESS THAN, CUT LEFT HALF OF ARRAY AND RECURSIVE CALL
    // IF TARGET IS GREATER THAN, CUT RIGHT HALF OF ARRAY AND RECRUSIVE CALL
}

// Test Case 1 [1,2,3,4,5,6,7,8,9] ,  8
// Test Case 2 [6,7,8,9] , 8
// Test Case 3 [8,9] , 8

function recursiveBinary(arr, target){
    // let start = 0;
    // let end = arr.length - 1; 
           
        let mid = Math.floor((start + end)/2); 
   
        if (arr[mid] === target) return true; 
  
        else if (arr[mid] < target){
            // start = mid + 1; // return recusive
            return recursiveBinary(arr.slice(mid, arr.length), target)
        }
        else {
            end = mid - 1; // return recursive
        }
    return false; 
}

// arr.slice(0, mid) == first half of array
// arr.slice(mid, arr.length) == second half of array

console.log(recursiveBinary([1,2,3,4,5,6,7,8,9],8))
console.log(recursiveBinary([6,7,8,9],8))
console.log(recursiveBinary([8,9],8))