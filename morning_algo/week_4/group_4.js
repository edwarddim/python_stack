function recursiveSigma(n) {
    if (n == 0){
        return 0;
    }
    return n + recursiveSigma(n-1);
}

console.log(recursiveSigma(5));
// 5 => 5 + 4 + 3 + 2 + 1 => 15

/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
    .slice(start(inclusive), end(exclusive))
    var name = "edward"
    var part = name.slice(2,7)
*/
//  make a base case. it should stop before the first element in the string 
// we need to cut off the last element in the string each recursion
// as the recursive functions close we need to return that itterations string
// .splice @ i-1

function stringSubset(string, arr){
    // HINT: YOU'RE GOING TO NEED A FOR LOOP
    if(arr.length == 0){
        return arr
    }
    for(var i =0; i<string.length; i++){
        string.slice(arr)
    }
    // return arr[i] + stringSubset(string, arr)
}

  // EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]
stringSubset('abcd', [])

function stringSubset(string, arr){
    letters= string
    for(var i = 0; i < string.length; i++){
        letters.splice(0, string[string.length-1-i])
    }
}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
    Array.isArray(1) returns false

    Array.concat() will also come in handy
    var array1 = [1,2,3]
    var array2 = [4,5,6]
    var array3 = array1.concat(array2)
    console.log(array3) => [1,2,3,4,5,6]
*/
function recFlatten(arr){
  
}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]