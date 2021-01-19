


function balancePoint(arr){



    for (var i=0; i<arr.length; i++){
        var LSum = 0
        var RSum = 0

        for (var L=0;L<i L++){
            LSum += arr[L]
        }

        for (var R=i;R<arr.length;R++){
            RSum += arr[R]
        }
        console.log(LSum + " "+RSum)
    }

}
balancePoint([1, 2, 4, 2, 1])


function balancePoint(arr){
    var sumLeft = 0
    var sumRight = 0
    var startRight = arr.length - 2
    console.log(startRight)
    
    for (j=startRight; j>= 0; j--){
        for (i=0; i<=startRight; i++){
            sumLeft += arr[i]
        }
        for (i=arr.length-1; i> startRight; i--){
            sumRight += arr[i]
        }
        if (sumLeft == sumRight){
            return true
        }
    }
    return false
}

console.log(balancePoint([1, 2, 3, 4, 10]))
console.log(balancePoint([9,9]))
console.log(balancePoint([1, 2, 4, 2, 1]))

// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [9,9] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

[1,2,3,4,5,5]

function balanceIndex(arr){

    if(arr.length %2 == 0 ){
        return -1

    } else {
        for (var i=0; i<arr.length; i++){
            if(arr[i] %2 == 0){
                
                var LSum = 0
                var RSum = 0

                for (var L=0;L<i; L++){
                    LSum += arr[L]
                }

                for (var R=i+1;R<arr.length;R++){
                    RSum += arr[R]
                }
                if (LSum == RSum) {
                    return i
                }

            } else {
                continue
            }

        }

        return -1
    }
}