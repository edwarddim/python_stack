// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears. 


// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.
// */
function encode(string){
    var newString = ""
    var char =''
    var count =0
    for(var i = 0; i < string.length; i++){
        if (count==0){
            char=string[i]
            count++
        } else if (string[i] != char) {
            newString+=(char+count.toString())
            count=0
        } else {
            count++
        }
        
    }
    return newString
}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
    var newString=''
    for (let i = 0; i < string.length; i+=2) {
        for ( let j=0; j<string[i+1]; j++){
            newString+=string[i]
        }
    }
    return newString
}
console.log(decode('a4b2c1d3'))

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"
