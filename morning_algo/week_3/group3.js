                      
function binary_search(arr, target) {

	// getting high, low points, and defining mid value
	let high = arr.length-1
	let low = 0;
	let mid = 0;

	//  running while low is less than high value
	while (low <= high) {
		//  setting the new middle point with each loop
		mid = Math.floor((low + high) / 2)

		// checking if the target is either one of the three known values (high, low, mid)
		if (arr[mid] == target || arr[low] == target || arr[high] == target) {
			return true
		} else if (target > arr[mid]) { // if target is larger than the middle value, move the middle to the right one idx
			low = mid + 1
		} else { 						// if target is smaller than the middle value, move the middle to the left one idx
			high = mid - 1
		}
	}
	// return false if target value is not found
	return false

}

let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11]

console.log(binary_search(testarr, 4))  	// true
console.log(binary_search(testarr, 9))  	// false
console.log(binary_search(testarr, 11)) 	// true
