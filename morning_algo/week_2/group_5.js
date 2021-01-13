// MON
/* 
    Given an array of strings
    return a object to represent how many times each array item is found (a frequency table)
    Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    var count_dict = {}
    for (var i=0; i<arr.length; i++){
        if (count_dict.hasOwnProperty(arr[i])) {
            count_dict[arr[i]]++
        }
    }
}
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
  function reverseWordOrder(string){
  
  }
  // EX. "THIS IS A TEST" => "TEST A IS THIS"


  // TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A DICTIONARY TO KEEP TRACK OF SEEN CHARS
  2. CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/


function dedupeString(string){
  string= Array.from(new Set(string.split(''))).toString();
   return string
}

console.log(dedupeString("aabacecbedd")) // => "abced" 
// EX. "bbbbaaaaffff" => "baf"

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var newSting=""
  for(var i = string.length -1; i >=0){
    newSting += string[i]
  }
  return newString
}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


// WED
/* 
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/
function encode(string){
  var newString = {}
  var finalResult = ""
    for (var i = 0; i <string.length; i++){
      if (newString.hasOwnProperty(string[i])){
        newString[string[i]]++
      }
      else {newString[string[i]] = 1}
    }
    for (key in newString){
      finalResult += key + newString[key]
    }
    if (finalResult.length >= string.length){
      return string
    } else {
      return finalResult
    }
}
console.log(encode("aaaabbbbccd"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"






function decode(string){

}
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

//------