// WRITE A FUNCTION THAT PRINTS FROM 1 TO 255

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
    for(var i = 0; i < bob.length;i++){
        console.log(bob[i])
    }
}

printArray([1,2,3,4,5])
printArray(["ed","ed","ed","ed","ed"])