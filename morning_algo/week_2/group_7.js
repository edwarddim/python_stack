// MON
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
function dedupeString(str){

  var chars = {}

  for (var i=0; i<str.length; i++){
    if (!chars.hasOwnProperty(str[i])){
      chars[str[i]] = true
    }
  }

  var deduped = ""
  for (var [k,v] of Object.entries(chars)){
    deduped+=k
  }
  return deduped
}
console.log(dedupeString("bbbbaaaaffff"))

// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var words = string.split(' ')

  var backed = ""

  for (var i=0; i<words.length; i++){

    for (var i2=words[i].length-1; i2>=0; i2--){
      backed += words[i][i2]
    }

    if (i != words.length-1){
      backed += " "
    }
  }

  return backed
}
console.log(reverseWord("The quick brown fox jumped over the lazy dog."))

// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"