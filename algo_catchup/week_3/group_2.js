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

}
stringReverse("hello")
stringReverse("goodbye")


  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//

  // TUE
function parensValid(string){
  var opening_p = 0
  for(var i = 0; i < string.length; i++){
    if(opening_p < 0){
      return false
    }

    if(string[i] = "(" ){
      opening_p += 1
    }
    if(string[i] = ")"){
      opening_p -=1
    }
}

}
 // WE ARE GOING TO ITERATE THROUGH THE STRING
  // WE ARE GOING TO CHECK TO SEE IF IT EACH CHARACTER IS A 
  // OPENING OR CLOSING PARENS
  // WE HAVE TO KEEP TRACK OF HOW MANY OPENING AND CLOSING PARENS APPEAR IN STRING
  // HINT: YOU CAN JUST USE ONE VARIABLE INCREMENT/DECREMENT
  // DEPENDING ON HOW MANY OPENING AND CLOSING PARENS THERE ARE WE RETURN TRUE OR FALSE
  
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")(" => FALSE

// FRI
function isAnagram(string1, string2){
    
}
// HINT: YOU WANT TO USE A DICTIONARY(OBJECT)
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE


//each thing in the string needs to be broken up into arrays using .split
// nest a for loop inside of the first for loop to compare.
// for each char in string1, we check to see if it exists in string2

function isAnagram(str1, str2){
  if(str1.length != str2.length){
    return false
  }
  for(var i = 0; i < str1.length; i++){
    if(str2.includes(str1[i])){
      continue
    }
    else{
      return false
    }
  }
  // WE CHECKED EVERY CHAR IN STR1 AGAINST EVERY CHAR IN STR2
  return true
}
isAnagram("tea", "ate")
