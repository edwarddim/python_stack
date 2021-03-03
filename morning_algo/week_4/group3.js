
/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
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