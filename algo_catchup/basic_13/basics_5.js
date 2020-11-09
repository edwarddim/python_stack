// 1.
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// Write the function
function printNum(){
    // Creat a loop that will go through numbers from 1 through 255
    for(var i = 0; i < 256; i++){
        console.log(i)
    }
}
printNum()

// 2.
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
// You may use a modulus operator for this exercise.
function sumNum(){
    var sum = 0
    for(var i = 0; i < 1001; i++){
        if (i % 2 === 0){
            sum += i;
            console.log(sum)
        }
    }
}
sumNum()
// 3.
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// (e.g. 1+3+5+...+4997+4999).
function sumOdd(){
    var sum = 0
    for(var i = 0; i < 5000; i++){
        if (i % 2 === 1){
            sum += i;
            console.log(sum)
        }
    }
}
sumOdd()
// 4.
// Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArr(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        console.log(sum)
    }
}
sumArr([2, 3, 4, 5])
// 5.
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
// (e.g. for [-3,3,5,7] max is 7)
function numMax(arr){
    var max = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i] 
        }
    }
    return max
}
numMax([4, 6, 8, 9, 3])
numMax([-5,-4,-2,-1]) // try this scenario and check to see if works
// 6.
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
// (e.g. for [1,3,5,7,20] average is 7.2)
function avgNum(arr){
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum  += arr[i]
    }
    return sum / arr.length
}
avgNum([2, 8, 6, 5])
// 7.
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]).
// Hint: Use 'push' method.
function oddNum(arr){
    var arr = []
    for(var i = 0; i <= 50; i++){
        if(i % 2 == 1){
            arr.push(i)
        }
    }
    return arr
}
oddNum()
// 8.
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).
function valNum(arr){
    var y = 4
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            sum++
        }
    }
    return sum 
}
valNum([3, 8, 7, 9])
// 9.
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareNum(arr){
    var sum = 0
    var newArr= []
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * arr[i])
        
    }
    return newArr
}
squareNum([2, 8, 4, 9])


// 10.
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negNum(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}
negNum([3, -2, -8, 5])
// 11.
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
function valNum(arr){
    var max = arr[0]
    var min = arr[0]
    sum = 0
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i]
        newArr.push(max, min, sum / arr.length)
        newArr = [max, min, sum / arr.length]
    }
    return newArr
}
valNum([4, 8, 9, 5])
// 12.
// Swap Values - Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
//1. create function
//2. set variable for last item in list (save field here)
//3. set variable for first item in list (save field here)
//4. replace field 0 with what is in lastNum variable
//5. replace last field with firstNum variable
// pseudo code is close but right now you're only swapping the first and last element
function swapNum(arr){
    // WELL THAT CHANGED THINGS! is the pseudocode correct? ED?
    var temp = arr[0]
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = temp
    return arr
}
console.log (swapNum([4, 8, 6, 2]))
// 13.
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function repNum(arr){
    var zero = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < zero){
            arr[i] = 'Dojo';
            
        }
    }
    return arr
}
console.log(repNum([-1,-3,2]))