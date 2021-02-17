// // MON
// /* 
//   Given an array of strings
//   return a object to represent how many times each array item is found (a frequency table)
//   Useful methods:
//     Object.hasOwnProperty("keyName")
//       - returns true or false if the object has the key or not
// */
// function frequencyTable(arr){
//     var o = {};
//     for (elem of arr) {
//       if( o.hasOwnProperty(elem)){
//         o[elem]++;
//       }
//       else{
//         o[elem]=1;
//       }

//     }
//     return o
// }

// console.log(frequencyTable(['A','A','B','C','C','C','D','D']))

// // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
// /* 
//   Reverse Word Order
//   Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
//   .split()
// */
// function reverseWordOrder(string){
//     var arr = string.split(" "); //need to pass empty string
//     var string2 = '';
//     for( let i = arr.length - 1; i >= 0; i--){
//         string2 += arr[i]; 
//         if (i > 0){
//           string2 += ' ';
//         }
//     }
//     return string2

// }
// console.log(reverseWordOrder('THIS IS A TEST'))
// // EX. "THIS IS A TEST" => "TEST A IS THIS"

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
  var test = {}
  for (let i = string.length - 1; i >= 0; i--){
    if(test.hasOwnProperty(string[i])){
      string.splice(string[i])
    }
    else{
      // why are you concating a string to an object
      test += string[i]
    }
  }
  return string
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
