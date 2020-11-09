// 1.
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function allNum(){ 
    var num = [] 
    for(var i =1; i < 256; i++){
        num.push(i)
    }
    return num
}
console.log(allNum()) 
// NICELY DONE
// 2. (i % 2 == 0)
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
// You may use a modulus operator for this exercise.
function sumof1000(){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if (i % 2 === 0)
            sum += i;
        
    }
    return sum 
}
console.log(sumof1000())

// 3.
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.
// (e.g. 1+3+5+...+4997+4999).
function oddsum5000(){
    var sum = 0
    for(var i = 1; i < 5001; i++ ){
        if (i % 2 === 1)
            sum +=i
    }
    return sum

}
console.log(oddsum5000())

// 4.
// Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumarray(arr){
    sum = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum
        
}
// [1, 2, 3 ,4 ,5 ,6 ,7 ,8]
console.log(sumarray([1, 2, 3 ,4 ,5 ,6 ,7 ,8]))

// 5.
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
// (e.g. for [-3,3,5,7] max is 7)
function findMax(arr){
    max = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max 
}
console.log(findMax([34, 25, 96, 100 ,223, 20]))


// 6.
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
// (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr){
    sum = 0
    for( var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        var average = sum / arr.length; 
    }
    return average
}
console.log(findAvg[26, 49, 34, 67, 23, 2131313])


// 7.
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]).
// Hint: Use 'push' method.
function odd(){
    newArray = []
    for(var i = 1; i < 51; i+=2){
        newArray.push(i);
    }
    return newArray;
}

console.log(odd())


// 8.
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y){
    var num = 0
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            num += 1 
        }
        return num;
    }
}

console.log(greaterThanY([56, 23, 1, 4, 3, 2, 45]))


// 9.
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareValues(arr){
for(var i = 0; i < arr.length; i++){
    num = arr[i] * arr[i];
    arr[i] = num;
    }
    return arr;
}

console.log(squareValues([1, 2, 3, 4, 5, 6, 7, 8])) //example array

// 10.
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negToZero(arr){
    for(var i = 0; i <arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negToZero([-1, 3, -5, -6, -10, 11, 2, 3, 4])) //example array

// 11.
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
// (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];

        }
        sum = sum + arr[i];

    }
    var avg = sum / arr.length;
    var newArr= [max,min,avg];
    return newArr

}

console.log(maxMinAvg([1, 3, 4, 5, 6, 7, 8 ,9 ,10]))

// [10,-2,3.5])

// 12.
// Swap Values - Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(arr){
    let temp = arr[0]; 
    arr[0] = arr[arr.length - 1];
    arr[arr.length -1] = temp;
    
    return arr;
}

console.log(swapValues([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10])) //example array

// 13.
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(numToString([-1, -2 ,3, -5, 5, -10, 11, -12]))