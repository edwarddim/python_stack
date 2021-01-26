function sumArr(arr, i=0) {
    // 1. BASE CASE
    if (i == arr.length){
        return 0
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. RECURSIVE CALL
    return sumArr(arr,i+1)+arr[i]
}
// [1,2,3] => 6
console.log(sumArr([1,2,3]))  