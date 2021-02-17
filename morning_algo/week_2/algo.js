// MON
/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
// obj = {}
// obj.hasOwnProperty("key_name") => if("key_name" in obj)
function frequencyTable(arr){
  var letterObj = {}
  for(var i = 0; i < arr.length; i++){
    if(letterObj.hasOwnProperty(arr[i])){
      letterObj[arr[i]] += 1
    }
    else{
      letterObj[arr[i]] = 1
    }
  }
  return letterObj
}
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  .split()
*/
function reverseWordOrder(string){
  var wordArr = string.split(" ") // ["THIS", "IS", "A", "TEST"]
  var returnString = ""
  // ITERATE TRHOUGH WORDARR IN REVERSE
  for(var i = wordArr.length - 1; i >= 0; i--){
    returnString += wordArr[i]
    returnString += " "
  }
  return returnString
}
// EX. "THIS IS A TEST" => "TEST A IS THIS"


//-----------------------------------------------------------------------------------------------------//
// TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A OBJECT(DICTIONARY) TO KEEP TRACK OF SEEN CHARS
  2. EXTRA CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
  // ITERATE THROUGH THE STRING AND BUILD OBJ WITH CHARACTERS IN STRING
  var obj = {}
  for(var i =0; i < string.length; i ++){
    if(!obj.hasOwnProperty(string[i])){
      obj[string[i]] = 0
    }
  }
  var returnString = ""
  for(var [key, value] of Object.entries(obj)){
    returnString += key
  }
  return returnString
}
console.log(dedupeString("aabacecbedd"))



// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var wordArr = string.split(' ') // ["THIS", "IS", "A", "TEST"]
  // ITERATE THROUGH WORDARR
  var returnString = ""
  for(var i = 0; i < wordArr.length; i++){
    var reverseWord = ""
    for(var j = wordArr[i].length - 1; j >= 0; j--){
      reverseWord += wordArr[i][j]
    }
    returnString += reverseWord
    returnString += " "
  }
  return returnString
}
function reverseWord2(string){
  var wordArr = string.split(' ') // ["THIS", "IS", "A", "TEST"]
  // ITERATE THROUGH WORDARR
  var returnString = ""
  for(var word of wordArr){ 
    returnString += word.split("").reverse().join("")
  }
  return returnString
}

console.log(reverseWord("THIS IS A TEST"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"


//-----------------------------------------------------------------------------------------------------//
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

}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

//-----------------------------------------------------------------------------------------------------//
// THUR
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
  n will not be longer than the string length
*/

function rotateString(string, n){

}
console.log(rotateString("Hello World", 1))
console.log(rotateString("Hello World", 2))

//-----------------------------------------------------------------------------------------------------//
// FRI

/*
    Given a string, return the first non-repeating character
    within string
    // EX. "stress" => "t"
    // EX. "moonmen" => "e"
*/
function firstNonRepeatingChar(string){
  
}
console.log(firstNonRepeatingChar("stress"))