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
// function frequencyTable(arr){
// var table = { "A" : 0, "B": 0, "C":0, "D":0 }
// // you don't know what characters we're going to see
// //this was the only thing i could think of baessd on what we were given 0_0
//     for(i=0;i<arr.length;i++){
//       // arr[i] => represents the chars within the arr
//       if(table.hasOwnProperty(arr[i])){
//         // if char exists within obj then increment
//         // table[]
//         table.(arr[i])+=1;
//       }
//       else{
//         //if the key doesn't exist then create the key with a value
//         table.append(arr[i])
//       }
//   }
// return table;
// }
// console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/* 
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  .split()
*/
// function reverseWordOrder(string){

// }
// EX. "THIS IS A TEST" => "TEST A IS THIS"

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
//   dict = {}
//   for (i=0; i<string.length; i++) {
//     if (dict.hasOwnProperty(string[i])) {
//       dict[string[i]]++
//     }
//     else{
//       dict[string[i]] = 1
//     }
//   }
//   str = ""
//   for ((key, value) in dict) {
//     str += dict[key]
//   }
//   return str
// }
// console.log(dedupeString("aabacecbedd"))

// // 

// function dedupeString(string){
//   let letters = {}
//   let str = ''
//     for (var i = 0; i < string.length; i++) {
//       if (letters.hasOwnProperty(string.charAt(i)) == false) {
//       letters[string.charAt(i)] = 1
//     }
//     }
//   let lettersArr = Object.keys(letters)
//   for (var i = 0; i < lettersArr.length; i++) {
//     str += lettersArr[i]
//   }
//   return str
// }

// console.log(dedupeString("aabacecbedd"))



// // EX. "aabacecbedd" => "abced"
// // EX. "bbbbaaaaffff" => "baf"
// /* 
//   Given a string containing space separated words
//   Reverse each word in the string.
//   If you need to, use .split to start, then try to do it without.
// */
// function reverseWord(string){

// }
// console.log(reverseWord("THIS IS A TEST"))
// // EX. "HELLO" => "OLLEH"
// // EX. "hello world" => "olleh dlrow"
// // EX. "abc def ghi" => "cba fed ihg"
// // EX. "THIS IS A TEST" => "SIHT SI A TSET"


// WED
/* 
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
*/
// function encode(string){
//   var encoded = ""
//   var counter = 0
//   var currentChar = string[0]
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] == currentChar) {
//       charCount++
//     }

//   }
// }

function encode(string) {
  var returnStr = ""
  dict = {}
  for (var i = 0; i < string.length; i++) {
    if (dict.hasOwnProperty(string[i]) == true) {
      dict[string[i]]++
    }
    else {
      dict[string[i]] = 1
    }
    for ((Key, value) in dict) {
       returnStr.join(key)
       returnStr.join(dict[key])
    }
    return returnStr
  }
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


// function bookIndex(arr) {
//   newArr = []
//   for(i = 0; i < arr.length; i++){
//     if((arr[i+1] - arr[i]) == 1){
//       temp = ''
//       temp += arr[i].toString()
//       while(arr[i+1] - arr[i] == 1){
//         i++
//       }
//       temp +='-'
//       temp += arr[i]
//       newArr.push(temp)
//     }
//     else{
//       newArr.push(arr[i].toString())
//     }
//   }
//   return newArr
// }


// THUR
/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the 
  right by that given integer amount.
  n will not be longer than the string length
*/

function rotateString(string, n){
  var begin = ""
  var end = ""
  for (var i = 0; i < string.length; i++) {
    if (i >= string.length - n ) {
      end += string[i]
    }
    else{
      begin += string[i]
    }
  }
  return end + begin
}
console.log(rotateString("Hello World", 1))
console.log(rotateString("Hello World", 5))
// "Hello World", 1 => "dHello Worl"
// "Hello World", 3 => "rldHello Wo"