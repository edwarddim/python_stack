// MON
/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){

}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

// -----------------------------------------------------------------------------------------------//// WRITE A FUNCTION THAT PRINTS FROM 1 TO 255

// PSEUDOCODE
// CREATE A FOR LOOP THAT GOES FROM 1 TO 255
// 

// 1. variable declaration
// 2. conditional
// 3. increment/decrement
// 4. code body

// DEFINING THE FUNCTION
function printTo255(){
    for(var i = 1; i < 256; i++){
        console.log(i)
        i++
    }
}
printTo255()

// WRITE A FUNCTION THAT ITERATES THROUGH A GIVEN ARRAY AND PRINTS ALL VALUES
// IN ARRAY
function printArray(bob){
    for(var i = 0; i < array.length;i++){
        console.log(array[i])
    }
}

printArray([1,2,3,4,5])
printArray(["ed","ed","ed","ed","ed"])


// Create a function that takes a list and returns the maximum value in the list. 
// If the list is empty, have the function return False.
// [-1,-4,-5,-7]
function findMaxMin(anyArray){
    if(anyArray.length == 0){
        return false
    }
    var max = anyArray[0]
    var min = anyArray[0]
    for(var i = 0; i < anyArray.length; i++){
        if(anyArray[i] > max ){
            max = anyArray[i]
        }
        if(anyArray[i] < min ){
            min = anyArray[i]
        }
    }
    var obj = {
        "max" : max,
        "min" : min
    }
    console.log(obj)
    return obj
}

console.log(findMax([-1,-4,-5,-7]))
console.log(findMax([-1,-4,-5,-7,-8,5]))
priconsole.log(findMax([]))

function findMin(anyArray){

    for(var i = 0; i < anyArray.length; i++){
        if(anyArray[i] < min ){
            min = anyArray[i]
        }
    }
    return min
}

console.log(findMin([5,4,3,2,1]))
console.log(findMin([]))

// MON
// TURN THE INCOMING SENTENCE(String) INTO AN ACRONYM(String)
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
// "Live From Sat Night Live".split(" ") => ["Live", "From", "Sat", "Night", "Live"]

// ITERATE (LOOP)
// CHECK TO SEE (IF, ELSE IF, ELSE)
// A NEW STRING, A NEW ARRAY(VAR TO HOLD INFORMATION)


// 1. Create a new variable to hold array for .split()
// 2. Iterate through array, and inside loop grab first letter from each word
// 3. With each letter concatenate to a string variable
// 4. console.log() the answer or return the answer
// DIFFERENCE BETWEEN CONSOLE.LOG AND RETURN    

function acronym(string){
    var arr = string.split(" ")
    var newString = ""
    for(var i = 0; i < arr.length; i++){
        newString += arr[i][0]
    }
    return newString
}

acronyms("Live From Sat Night Live")