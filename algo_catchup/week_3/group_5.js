// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
  var wordArr = string.split(" ");
  var newString = ""
  // ITERATE TRHOUGH WORDARR AND FOR EACH WORD WITHIN THE ARRAY
  for(var i = 0; i < wordArr.length; i++){
    // GRAB THE FIRST CHARACTHER FROM EACH WORD AND CONCATENATE TO A NEWSTRING
        newString += wordArr[i][0]
  }
  // RETURN THE ANSWER
  return newString 
}
// remember to console log whatever is being returned or you won't see your answer
console.log(acronyms("Live From Saturday Night Live"))


  // RETURN THE REVERSED STRING OF INPUT
  // EX. "HELLO" => "OLLEH"
  // NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    var string = ""
    for (var i = str.length -1; i >= 0; i--){
        string[i] += 
    }
}
stringReverse("hello")
stringReverse("goodbye")
// var empty_str = "";
// var empty_arr = str.split('');
// for( var i = empty_arr.length - 1; i>= 0; i--){
//     empty_str += empty_arr[i]+ "";
// }
// return empty_str


// }
// 


  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  // TUE
function parensValid(string){

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
  
  }
  
  // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
  // "HELLO" => FALSE
  // "KAYAK" => TRUE
  // "RACECAR" => TRUE
  
  
  function isAnagram(string1, string2){
      
  }
  // HINT: YOU WANT TO USE A DICTIONARY(OBJECT)
  // RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
  // EX. "ATE", "TEA" => TRUE
  // EX. "LISTEN", "SILENT" => TRUE
  // EX. "LISTEN", "SILENZ" => FALSE
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