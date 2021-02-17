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
// EX. "THIS IS A TEST" => "SIHT SI A TSET"