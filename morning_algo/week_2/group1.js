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
var table = { "A" : 0, "B": 0, "C":0, "D":0 }
// you don't know what characters we're going to see
//this was the only thing i could think of baessd on what we were given 0_0
    for(i=0;i<arr.length;i++){
      // arr[i] => represents the chars within the arr
      if(table.hasOwnProperty(arr[i])){
        // if char exists within obj then increment
        // table[]
        table.(arr[i])+=1;
      }
      else{
        //if the key doesn't exist then create the key with a value
        table.append(arr[i])
      }
  }
return table;
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
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
  1. USE A OBJECT(DICTIONARY) TO KEEP TRACK OF SEEN CHARS
  2. EXTRA CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
  dict = {}
  for (i=0; i<string.length; i++) {
    if (dict.hasOwnProperty(string[i])) {
      dict[string[i]]++
    }
    else{
      dict[string[i]] = 1
    }
  }
  str = ""
  for ((key, value) in dict) {
    str += dict[key]
  }
  return str
}
console.log(dedupeString("aabacecbedd"))

// 

function dedupeString(string){
  let letters = {}
  let str = ''
    for (var i = 0; i < string.length; i++) {
      if (letters.hasOwnProperty(string.charAt(i)) == false) {
      letters[string.charAt(i)] = 1
    }
    }
  let lettersArr = Object.keys(letters)
  for (var i = 0; i < lettersArr.length; i++) {
    str += lettersArr[i]
  }
  return str
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

}
console.log(reverseWord("THIS IS A TEST"))
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"