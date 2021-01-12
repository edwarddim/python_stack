// MON
/* 
  Given an array of strings
  return a object to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
*/
function frequencyTable(arr) {
    var obj = {}
      for (var name in arr) {
        if (arr.hasOwnProperty(name)) {

        }
        else {
          
        }
      }
    return obj

    // obj.hasOwnProperty("key_Name")
}
console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
console.log(frequencyTable(['A','C','C','C','D','D','A','B']))
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
    .split()
  */
// okay thank you 
  function reverseWordOrder(string){
    var newString=""
    for(var i=string.length-1; i >= 0; i--){
        newString += string[i]
    }
    return newString
    }
  console.log(reverseWordOrder("THIS IS A TEST"))//"THIS IS A TEST" => "TEST A IS THIS"



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
// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){

}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"
l
function reverseWord(string){
    var words = string.split(' ');
    var result = [];
    for(var i = 0; i < words.length; i ++){
        result.push(words[i].split('').reverse().join(''));
    }
    return result.join(' ');
}
console.log(reverseWord('Hello World'));


