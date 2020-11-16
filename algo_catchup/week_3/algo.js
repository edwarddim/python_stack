// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
  var wordArr = string.split(" ")
  // ITERATE TRHOUGH WORDARR AND FOR EACH WORD WITHIN THE ARRAY
  // GRAB THE FIRST CHARACTHER FROM EACH WORD AND CONCATENATE TO A NEWSTRING
  // RETURN THE ANSWER
}
acronyms("Live From Saturday Night Live")
acronyms("Happy Birthday to you")


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
  var newString=  ""
  for(var i = string.length-1; i >= 0; i--){
    newString += string[i]
  }
  return newString
}
stringReverse("hello")
stringReverse("goodbye")


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string){
  // WE ARE GOING TO ITERATE THROUGH THE STRING
  // WE ARE GOING TO CHECK TO SEE IF IT EACH CHARACTER IS A 
  // OPENING OR CLOSING PARENS
  // WE HAVE TO KEEP TRACK OF HOW MANY OPENING AND CLOSING PARENS APPEAR IN STRING
  // HINT: YOU CAN JUST USE ONE VARIABLE INCREMENT/DECREMENT
  // DEPENDING ON HOW MANY OPENING AND CLOSING PARENS THERE ARE WE RETURN TRUE OR FALSE
  
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")(" => FALSE


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED
function isPalindrome(string){
  for(var i = 0; i < (string.length-1)/2;i++){
    if(string[i] != string[string.length-i-1]){
      return false
    }
  }
  return true
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "RACECAR" => TRUE

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
  // ITERATING THROUGH THE ARRAY
  // WE ARE GOING TO CHECK TO SEE IF THE CHARACTER EXISTS AS A KEY IN AN OBJECT
  // IF THE KEY ALREADY EXISTS THEN INCREMENT THE COUNT
  // IF THE KEY DOESN'T EXIST THEN CREATE A KEY VALUE PAIR
  var table = {}
  for(var i =0; i < arr.length; i++){
    if(table.hasOwnProperty(arr[i])){
      table[arr[i]] += 1
    }
    else{
      table[arr[i]] = 1
    }
  }
  return table
}
frequencyTable(['A','A','B','C','C','C','D','D'])
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// FRI
// "DEER" => ['D', 'E', 'E', 'R']
function isAnagram(string1, string2){
    // EARLY BREAK
    if(string1.length != string2.length){
      return false
    }
    // WE USED AN OBJECT TO STORE THE CHARS WE SAW
    // AND THE AMOUNT OF TIMES IT OCCURS
    var str1Obj = {}
    for(var i =0; i < string1.length; i++){
      if(str1Obj.hasOwnProperty(string1[i])){
        str1Obj[string1[i]] += 1
      }
      else{
        str1Obj[string[i]] = 1
      }
    }
    // WE LOOP THROUGH THE SECOND CHARACTER
    // AND CHECK CHARS IN STRING2 AGAINST str1Obj
    for(var i = 0; i < string2.length; i++){
      if(string2[i] in str1Obj){
          str1Obj[string2[i]] -= 1
          if(str1Obj[string2[i]] < 0){
            return false
          }
      }
      else{
          return false
      }
    }
    return true
}
isAnagram("ATE", "TEA")
// HINT: YOU WANT TO USE A DICTIONARY(OBJECT)
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE

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