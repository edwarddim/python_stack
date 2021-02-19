// TUE
/* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A OBJECT(DICTIONARY) TO KEEP TRACK OF SEEN CHARS
  2. EXTRA CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
// function dedupeString(string){
//     var obj = {};
//     var string2 = "";
//     for (let i = 0; i < string.length; i++) {
//         obj[ (string[i]) ] = true
//     }
//     console.log(obj);
//     for (let i = 0; i < string.length; i++) {
//         if ( obj[string[i]] ){
//             string2+=string[i]
//             obj[ (string[i]) ] = false
//         }
//     }
//     return string2
// }
// console.log(dedupeString("aabacecbedd"))



/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    newStr = string.split(' ')
    rtrnStr = ''
    for (let j = 0; j < newStr.length; j++) {
      for(i = newStr[j].length - 1; i >= 0; i--){
          rtrnStr += newStr[j][i]
      }
      rtrnStr+=' '
    }
    return rtrnStr
}
console.log(reverseWord("THIS IS A TEST"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"  


/* 
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/
function encode(string){
  var newString = ""
  var char = ''
  var count = 0
  for( var i = 0; i < string.length; i++){
    if (count == 0){
      char=string[i]
      count++
    }
    else if (string[i] != char){
      newString+=(char+count.toString())
    }
    else {
      count ++
    }
  }
  return newString
}
console.log(encode("aaaabbcddd"))


// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}

parseInt("3") // 3
parseInt("a") // NaN
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"


// THUR
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
  n will not be longer than the string length
*/

function rotateString(string, n){
  var emptyStr = "";
  for (var i=string.length - n; i<string.length; i++){
      emptyStr += string[i];
  }
  for (var i=0; i<string.length - n; i++){
      emptyStr += string[i];
  }
  return emptyStr;
}

console.log(rotateString("Hello World", 1))
console.log(rotateString("Hello World", 2))
"Hello World", 1 => "dHello Worl"
"Hello World", 3 => "rldHello Wo"