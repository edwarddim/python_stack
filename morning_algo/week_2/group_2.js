/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
function frequencyTable(arr){
    // var obj = {}
    // obj.hasOwnProperty("key_Name")
        object = {}
        for( var i =0; i< arr.length -1;i++){
            if(object.hasOwnproperty(arr[i]) == true){
                oject[arr[i]]++
            } else {
                object[arr[i]] = 1;
            }
        }
        return object
    }

console.log(frequencyTable(['A','B','C','C','C','D','D']))

  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
function reverseWordOrder(string){
var word = string.split(" ")
var temp = "";
for(var i = word.length - 1; i>=0; i--){
    if (i !== 0){
        temp = temp + word[i] + " "
    }
    else{
        temp = temp + word[i]
    }
}
return temp
}
console.log(reverseWordOrder("This Is A Test"))
  // EX. "THIS IS A TEST" => "TEST A IS THIS"
  

//-----------------------------------------------------------------------------------------------------//
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

}

// this works. 
function dedupeString(string){
  result = {}
  var returnstr = ""
  for (i=0; i<string.length; i++)
    if (result.hasOwnProperty(string[i]) == true){
      continue
    }
    else {
      result[string[i]] = 1
      returnstr += string[i]
    }
  return returnstr
}
console.log(dedupeString("aabacecbedd"))
console.log(dedupeString("bbbbaaaaffff"))

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){

}
// this reverses
function reverseString(str) {
  var splitString = str.split(""); 
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
reverseString("HELLO")

// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// }
// reverseString('hello world');

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
  // Object.hasOwnProperty("keyName")
  


  recur = {}
  for(var i=0;i<string.length;i++){
    if(recur.hasOwnProperty(string[i])){
      recur[string[i]]++
    } else {
      recur[string[i]] = 1
    }

  }
  
  encoded = ""

  for(var [k,v] of Object.entries(recur)){
    encoded+=(k+v)
  }

  if(string.length<=encoded.length){
    return string
  } else {
    return encoded
  }

}
console.log(encode("aaaabbcddd"))
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){


  var dict = {}
  for(var i=0;i<string.length;i++){
    
    if (i != string.length-1 && !isNaN(parseInt(string[i+1]) ){
      if (dict.hasOwnProperty[string[i]]){
        dict[string-i] += parseInt(string[i+1])
      }

    }

  }
}
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"