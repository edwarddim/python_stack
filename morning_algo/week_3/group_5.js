



function twoNumSum(arr1, arr2){
    returnArr = []
    for(var i =0; i< arr1.length; i++){
        for(var j =0; j<arr2.length; j++){
            returnArr.push(arr1[i] + arr2[j])
        }
    }
    return returnArr
}
console.log(twoNumSum([1,2,3], [5,6,7]))




function missingValue(arr){
    var max = arr[0]
    for(var i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    for(j = 0; j<= max; j++){
        if(j in arr){
            continue
        }
        else{
            return true
        }
    }
    return false
}
console.log(missingValue([4,0,2,1]))