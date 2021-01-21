



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