function recursiveBinary(arr, target){
  console.log(arr)
  if (arr.length==0){
    return false
  }
  var i = Math.floor(arr.length/2)
  if (arr[i]==target){
    return true
  }
  if (arr[i]>target){
    return recursiveBinary(arr.slice(0,i),target)
  }
  if (arr[i]<target){
    return recursiveBinary(arr.slice(i+1,arr.length),target)
  }
}
//console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))


