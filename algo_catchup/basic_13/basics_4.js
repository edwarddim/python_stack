// 1.
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
//. Create a function
// create a for loop go through 1- 256
// something happens , console.log the index
// call the funtion print numbers

// function printNumber(){
//     for(var i = 1; i < 256; i++){
//         console.log(i)
//     }
// }()

// printNumber()
// create a funciton
// create a loop go through 1-256


// 2.
// add 2 to each number in order to get all even numbers
//. Create a function
// create a for loop go through 1- 256
// something happens , console.log the index
// call the funtion print numbers
// function getEven(){
//     for(var i = 0; i < 256; i +=2){
//         console.log(i)
//     }
// }
// getEven()
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
// You may use a modulus operator for this exercise.

// 3.
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// (e.g. 1+3+5+...+4997+4999).

// create a function that loops through 1 and 5000
// return the odd intigers added between 1 and 5000 
// console.log(the sum)

// function sumAllto5000(){
//     var num = 0 
//     for(var i = 0; i < 5000; i+=2){
//         num += i; 
//     }
//     return num 
// }
// console.log(sumAllto5000())

// 4.
// Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).


 //A function- Iterate through an array
// variable and a empty string to put the array in
// add or sum the array
// return the array
// call the array

// or whoever is zox30
// function sumArray(array){
//     var sum = 0
//     for(var i = 0; i < array.length; i++){
//        sum = sum + array[i]
    
//     }
//     return sum
// }
// console.log(sumArray([1,2,5]))


// function sumArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum
//   }
//   console.log(sumArray([1,2,5]))


// function sumArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum
//   }
//   console.log[1,2,5]

//   function sumArray(array){
//     var sum = 0
//     for(var i = 0; i < array.length; i++){
//         // logic is going to be same as the previous problem
//        sum = sum + array[] //we're adding the numbers
//         console.log(array)
//     }
// }


// 5.
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
// (e.g. for [-3,3,5,7] max is 7)
// write a funciton and iterate through and array.
// retuns the largest value 


// function findMax(arr){
//   max = arr[0]
//   for(var i = 0; i < arr.length; i++){
//     if (arr[i]>max){
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(findMax([-3,-3,-5,-7]))


// 6.
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
// // (e.g. for [1,3,5,7,20] average is 7.2)
// write a function 
// iterate through the an array
// add the sum of each indexe
// divide the sum by the array length.
// return the average 
// console.log([])

function average(arr){
    var sum = 0
    var averages = 0
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        averages = sum / arr.length 
    } return averages 
}

average([1,3,5,7,20])

// 7.
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]).
// Hint: Use 'push' method.

// 8.
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).

// 9.
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])

// 10.
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// 11.
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

// 12.
// Swap Values - Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// 13.
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].