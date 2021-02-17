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