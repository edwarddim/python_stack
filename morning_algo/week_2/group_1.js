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
    for (var i=0; i<arr.length;i++){
        if (count_dict.hasOwnProperty(arr[i])) {
            count_dict[arr[i]]++
        } else {
            count_dict[arr[i]] = 1
        }
    }
    return count_dict
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
    var words = string.split(" ")
    var backs = ""
    for (var i=words.length-1; i>=0; i--){
        if (i != 0 ){
            backs = backs + words[i] + " "
        } else {
            backs += words[i]
        }
    }
    return backs
}
console.log(reverseWordOrder("THIS IS A TEST"))
  // EX. "THIS IS A TEST" => "TEST A IS THIS"
  















  // TUESday

  /* 
  String: Dedupe
  Remove duplicate characters 
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
  1. USE A DICTIONARY TO KEEP TRACK OF SEEN CHARS
  2. CHALLENGE: USE A BUILT IN FUNCITON TO RETURN THE SAME STRING
*/
function dedupeString(string){
    var splitString= string.split(" ")
    var emptyString = ""
    for (var i=0; i < splitString.length; i++){
      if (splitsting[i] == emptysting){
        emptysting++
      }
      if(splitString[i] != emptyString[]) {
        splitString[i].push(emptyString)
    }
  return emptyString
}

console.log(dedupeString("aabacecbedd"))



function dedupeString(string){
  result = {}
  var returnstr = ""
  for (i=0; i < string.length; i++) {
      if (result.hasOwnProperty(string[i]) == true) {
          continue;
      }
      else {
          result[string[i]] = 1
          returnstr += string[i]
      }
  }
  return returnstr

}
console.log(dedupeString("bbbbaaaffe"))


// EX. "aabacecbedd" => "abced" 
// EX. "bbbbaaaaffff" => "baf"
/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var splitString = string.split;
  

}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"