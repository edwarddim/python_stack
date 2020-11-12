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
      var op_count= 0
      var ed_count = 0
      for(var i = 0; i < string.length; i++){
        
        if(string[i] == '(' ){
          op_count++
        }
        if(string[i] == ')' ){
          ed_count++
        }
        // THIS ENDS THE FUNCTION EARLY, EVALUATE AFTER LOOP IS DONE
        if (op_count==ed_count){
          return true
        }
        }
      }
}
parensValid("()( () )")
  // EX. "()( () )" => TRUE
  // EX. "( ()()" => FALSE
  // EX. "()()()" => TRUE
  // EX. "())(()" => FALSE
str= "( ()()"


function parensValid(str) {
    var op_count= 0
    var ed_count = 0
    for (var i=0; i<str.length; i++){
    if (ed_count > op_count){
        return false
    }
    if(str[i] == '(' ){
        op_count++
    }
    if(str[i] == ')' ){
        ed_count++
    }
    }
    if (op_count==ed_count){
    return true
    }
    return false
}
console.log(parensValid(str))

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
      // CREATE AN EMPTY OBJECT
      var table = {}
      for(var i = 0; i < arr.length; i++){
        // OBJECTS HAVE KEY VALUE PAIRS
        // table.hasOwnProperty() will return true depending
        // the character exists as a key in the table
        if(table.hasOwnProperty(arr[i])){
          
        }
        else{

        }

    }
    frequencyTable(['A','A','B','C','C','C','D','D'])
  // ITERATING THROUGH THE ARRAY
  // WE ARE GOING TO CHECK TO SEE IF THE CHARACTER EXISTS AS A KEY IN AN OBJECT
  // IF THE KEY ALREADY EXISTS THEN INCREMENT THE COUNT
  // IF THE KEY DOESN'T EXIST THEN CREATE A KEY VALUE PAIR
//   str = "madam" 
// // Create empty object 
// let letterCount = {} 
// // Loop through every letter in the string
// for(let i = 0; i < str.length; i++){
//   // If the letter is a key inside the object
//   if (letterCount[str[i]]){
//     // Add 1 to the counter
//     letterCount[str[i]] += 1
//   } else {
//     // Otherwise, create a new counter for that new letter
//     letterCount[str[i]] = 1
//   }
// }

// // Print in the console
// console.log(letterCount)
  // EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
  // EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}