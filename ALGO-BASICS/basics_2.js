// 1.
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.


// 2.
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
// You may use a modulus operator for this exercise.

// 3.
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. 
// (e.g. 1+3+5+...+4997+49990.
function oddsum5000(){	
	var sum = 0
	for(var i = 1; i < 5001; i++ ){
	if (i % 2 === 1)
	sum +=i
	}
	return sum
	
	}
	oddsum5000()


// 4.
// Iterate an array - Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// 5.
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
// (e.g. for [-3,3,5,7] max is 7)

// 6.
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array.
// (e.g. for [1,3,5,7,20] average is 7.2)

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

function positive(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i]<0 ){
            arr[i]=0
        }
    }
    return(arr)
}
positive([1,5,10,-2])

// 11.
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxminavg(arr){
    var max = 
    for(var i = 0; i < arr.length; i++){

    }
}

// 12.
// Swap Values - Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// 13.
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].









// Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
// Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

function biggie(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'biggie'
        }
    }
    return arr
}

biggie([-1, 3, 5, -5])a

// Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
function SumPositive(arr){
    var Sum = 0
    for(var i=0; i <arr.length; i++){
        if(arr[i] > 0){
            Sum = Sum + 1
        }
        arr[arr.length - 1] = Sum
    }
    console.log(arr)
}
SumPositive([2, 4, 11, -6, 0, -6, 88])

// Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
// Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

// Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
function SumTotal(arr){
    var sum = 0
    for(var i=0; i < arr.length; i++){
        

    }

}



// Example: sum_total([1,2,3,4]) should return 10
// Example: sum_total([6,3,-2]) should return 7

// Average - Create a function that takes a list and returns the average of all the values.x
// Example: average([1,2,3,4]) should return 2.5

// Length - Create a function that takes a list and returns the length of the list.
// Example: length([37,2,1,-9]) should return 4
// Example: length([]) should return 0

// Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
// Example: minimum([37,2,1,-9]) should return -9
// Example: minimum([]) should return False

// Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
// Example: maximum([37,2,1,-9]) should return 37
// Example: maximum([]) should return False

// Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
// Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

// Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
// Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]