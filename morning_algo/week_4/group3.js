
/*
    String Subset
    Given a string, return an array filled
    with IN-rORDER substrings
    .slice(start(inclusive), end(exclusive))
    var name = "edward"
    var part = name.slice(2,7)
*/
// HINT: YOU'RE GOING TO NEED A FOR LOOP
function stringSubset(string, arr = []){
    // BASE CASE - CHECK TO SEE IF STRING LENGTH IS 1
    // FOR LOOP
}

function stringSubsetNoArr(string){
    //Check base case
    if (string.length==1){
        return [string]
    }
    //Get all substrings that include the first character
    var arr=[]
    for (let i = 1; i <= string.length; i++) {
        arr.push(string.slice(0,i))
    }
    //Call the function on the string missing the first character
    notFirstChar = stringSubsetNoArr( string.slice( 1,string.length ) )
    for (let i = 0; i < notFirstChar.length; i++) {
        arr.push(notFirstChar[i])
    }
    return arr
}

  // console.log(stringSubset("abcd"))
  // console.log("HELLO WORLD")
  
  // EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]
/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/
// LEVEL 1 [1,2,3,4,5,6,7,8,9] ,  8
// LEVEL 2 [6,7,8,9] , 8
// LEVEL 3 [8,9] , 8

function recursiveBinary(arr, target){
    // BASE CASE - RETURN FALSE IF ARR.LENGTH == 0
    if arr.length == 0:
      return false;
    // CHOOSE OUR MIDDLE INDEX
    var midIdx = math.floor((arr.length-1)/2);
    // BASE CASE #2 - IF WE FIND THE TARGET RETURN TRUE
    // FORWARD PROGRESS / RECURSIVE CALL - CHECK IF GREATER THAN OR LESS THAN
    // MAKE OUR RECURSIVE CALL ON THE SLICE OF THE ARRAY IN THE DIRECTION
    // dont forget we can use arr.slice() - look up the documentation
}
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  8))
console.log(recursiveBinary([1,2,3,4,5,6,7,8,9] ,  11))

function risingSqauresNoArr(num){
    if (num == 1){
        return [1]
    }
    var arr = risingSqauresNoArr(num-1)
    arr.push(num*num)
    return arr
}
console.log(risingSqauresNoArr(3))
console.log(risingSqauresNoArr(5)) // [1,4,9,16,25]