function balancePoint(arr){
    if(arr.length < 2) return false
    var leftInd = 0;
    var rightInd = arr.length-1;
    var leftSum, rightSum = 0
    while(leftInd <= rightInd){
        if(leftSum <= rightSum){
            leftSum += arr[leftInd]
            leftInd++
        }
        else {
            rightSum += arr[rightInd]
            rightInd--
        }
    }+