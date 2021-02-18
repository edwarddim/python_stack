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

var newObj = {};

  for(var i = 0; i < string.length; i++){
      // checks to see if char is in newObj
      if(!(string[i] in newObj)){
        // you can't push to objeccts. you create key value pairs newObj[string[i]] = something
        newObj.push(string[i]);
        
      }
      else{
        return false;
      }
  }
  return newObj;
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

  var old = string.split();
  var new = " ";

  for(var i = 0; i < old.length; i++){

    for(var j < 0)
  }




}
console.log(reverseWord("THIS IS A TEST"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"f

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
  let returnString = ""
  let object = {}
  for (let i = 0; i < string.length; i++){
    if (!object.hasOwnProperty(string[i])){
      object[string[i]] = 1
    }
    else{
      object[string[i]]++
    }
  }
  for (let [key,value] of Object.entries(object)){
    returnString = returnString + key + value
  }
  if (string.length == returnString.length){
    return string
  }
  else{
    return returnString
  }
}
console.log(encode("aaaabbcddd"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
  let subString = string.split()
  let returnString = ""
  for (let i = 0; i < subString.length; i+=2){
    returnString= returnString + (subString[i] * parseInt(subString[i+1]))

  }
  return returnString
}

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"