
// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
  EXTRA CHALLENGE: SOLVE ALGO WITHOUT USING A OBJECTS TO KEEP TRACK OF NUMBERS
*/
function missingValue(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==arr.length){
            return true
        }
    }
    return false
}

function missingValue2(arr){
    var max=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max){
            max=arr[i]
        }
    }
    if(max==arr.length+1){
        return true
    }
    else{
        return false
    }
}

function missingValue3(arr){
    var avg=0
    for (let i = 0; i < arr.length; i++) {
        avg+=arr[i]
        }
    avg /= arr.length
    if (avg == (arr.length-1)/2){
        return true
    } else{
        return false
    }
}
// [0,0,3]
// [3,0,1,2] => False
// [4,0,2,1] => True

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
