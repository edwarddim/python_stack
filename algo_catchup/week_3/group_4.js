// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
// function acronyms(string){
//     var wordArr = string.split(" ")
//     // ITERATE TRHOUGH WORDARR AND FOR EACH WORD WITHIN THE ARRAY
//     var newString = "" // you need an empty string to add each char to
//     for(i = 0; i < wordArr.length; i++){
//       // GRAB THE FIRST CHARACTHER FROM EACH WORD AND CONCATENATE TO A NEWSTRING
//       newString += wordArr[i][0]
//     }
//     // RETURN THE ANSWER
//     return newString
//   }
//   acronyms("Live From Saturday Night Live")
//   acronyms("Happy Birthday to you")
  
  
// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// make a function 
// create a var and iterate through an array
// loop through the array
// return a the strin


  // function stringReverse(string){
  //     var = "reg"
  //     for (var i = str.length - 1; i >= 0; i--){


          
  
  // }
  // stringReverse("hello")
  // stringReverse("goodbye")
  
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
//iterate
// for loop
//do something
// look for (, {, [ ]})"("
// we're only dealing with parens for this one, ()
//return/call
//print


  // TUE
//   function parensValid(string){
//     // set up tracker for parentheses counting
//     var tracker = 0
//     // you are iterating through string
//     for(var i = i < string.length; i++){
//         // WE ARE GOING TO CHECK TO SEE IF IT EACH CHARACTER IS A 
//         // OPENING OR CLOSING PARENS
//         if (string[i] === '(') {
//             tracker += 1
//         }
//         if (string[i] == ')'){
//           tracker -= 1

        
//         if tracker < 0 
//         return false
//         }
//     }
//     // DEPENDING ON HOW MANY OPENING AND CLOSING PARENS THERE ARE WE RETURN TRUE OR FALSE

// }






  
  }

  // ")))((("
  // RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
  // EX. "()( () )" => TRUE
  // EX. "( ()()" => FALSE
  // EX. "()()()" => TRUE
  // EX. "())(()" => FALSE
  
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // WED
  function isPalindrome(string){
    for(var i =0; i <string.len/2; i++ ){
      if (str[i] !== str[len - 1 - i]) {       
        return false;
    }
  }
  console.log("")


  function isPalindrome(string){ 
    for(var i = 0; i < string.length/2; i++){
        if(string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
    
  //   function isPalindrome(string){
  //     for(var i = 0; i < string.length/2; i++){
  //         if(string[i] != string[string.length -1 -i]){
  //             return false
  //         }
  //     }
  //     return true
  // }
  
  // [ and ] are the start and end of a character set.
  // \W means "non-word", as opposed to \w which will match a word.
  // _ is the "_" character.
  // / mark the beginning and end of a regular expression.
  // g means it's a global search.
  // So in the string $1.00, it would come out as 100 

  // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
  // "HELLO" => FALSE
  // "KAYAK" => TRUE
  // "RACECAR" => TRUE
//   Given an array of strings
//   return a sum to represent how many times each array item is found (a frequency table)
//   Useful methods:
//     Object.hasOwnProperty("keyName")
//       - returns true or false if the object has the key or not
//     Python: dict.has_key(key)
// 
  
function isAnagram(string1, string2){
  if(string1.length != string2.length){
      return false
  }
  var check = {}
  for(var i =0; i < string1.length;i++){
      if(string1[i] in check){
          check[string1[i]] += 1
      }
      else{
          check[string1[i]] = 1
      }
  }
  for(var i = 0; i < string2.length; i++){
      if(string2[i] in check){
          check[string2[i]] -= 1
          if(check[string2[i]] < 0){
              return false
          }
      }
      else{
          return false
      }
  }
  return true
}
console.log (isAnagram ("ATE", "TEA"))
  
  // HINT: YOU WANT TO USE A DICTIONARY(OBJECT)
  // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
  // EX. "ATE", "TEA" => TRUE
  // EX. "LISTEN", "SILENT" => TRUE
  // EX. "LISTEN", "SILENZ" => FALSe  
  // EX. "DEER", "REDD" => FALSE
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // THUR
  /* 
    Given an array of strings
    return a sum to represent how many times each array item is found (a frequency table)
    Useful methods:
      Object.hasOwnProperty("keyName")
        - returns true or false if the object has the key or not
      Python: dict.has_key(key)
  */
  function frequencyTable(arr){
    
  }
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
  /* 
    
  
  
  Reverse Word Order
    Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
  */
  function reverseWordOrder(string){
    
  }
  // EX. "THIS IS A TEST" => "TEST A IS THIS"
  // EX. "GOOD MORNING VIETNAM" => "VIETNAM MORNING GOOD"
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // FRI
  // GIVEN A NUMBER FIND THE LEAST AMOUNT OF COINS YOU CAN USE TO HAVE THE SAME AMOUNT
  // EX. 321 => "12 QUARTERS, 2 DIMES, 1 PENNIES"
  // EX. 79 => "3 QUARTERS, 4 PENNIES"
  // {
  //     "quarters" : 12,
  //     "dimes" : 2,
  //     "pennies" : 1
  // }
  function minCoinChange(amount){
  
  }
  
  /* 
    String: Dedupe
    Remove duplicate characters 
      - (case-sensitive)
    Bonus: Keep only the last instance of each character.
  */
  function dedupeString(string){
  
  }
  // EX. "aabacecbedd" => "abced"
  // EX. "bbbbaaaaffff" => "baf"