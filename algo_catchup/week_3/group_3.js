// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var wordArr = string.split(" ")
    var newString = ""
    // ITERATE TRHOUGH WORDARR AND FOR EACH WORD WITHIN THE ARRAY
    for(var i = 0; i < wordArr.length; i++){
        // GRAB THE FIRST CHARACTHER FROM EACH WORD AND CONCATENATE TO A NEWSTRING
        newString += wordArr[i][0]
    }
    // RETURN THE ANSWER
    return newString
}
acronyms("Live From Saturday Night Live")
acronyms("Happy Birthday to you")



// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
  // RETURN THE REVERSED STRING OF INPUT
    var returnString = ""
    for (var i = string.length-1; i >= 0; i--){
        returnString += string[i]
    }
    return returnString;
}
stringReverse("hello")
stringReverse("goodbye")
console.log(stringReverse("hello"))


  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
 // WE ARE GOING TO ITERATE THROUGH THE STRING
    // WE ARE GOING TO CHECK TO SEE IF IT EACH CHARACTER IS A 
    // OPENING OR CLOSING PARENS
    // WE HAVE TO KEEP TRACK OF HOW MANY OPENING AND CLOSING PARENS APPEAR IN STRING
    // HINT: YOU CAN JUST USE ONE VARIABLE INCREMENT/DECREMENT
    // DEPENDING ON HOW MANY OPENING AND CLOSING PARENS THERE ARE WE RETURN TRUE OR FAL
function parensValid(string){
    var parensOpen = 0;
    var parensClosed = 0;
    for( var i = 0; i < string.length; i++){
        if ( string[i] == '('){
            parensOpen++
        }
        else if( string[i] == ')'){
            parensClosed++;
        }
    }
    if (parensOpen != parensClosed){
        return false;
    }
    return true;
}
")))((("
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
  
  console.log(parensValid("()( () )"))
  console.log(parensValid("()(  )"))
  console.log(parensValid("() )"))
  console.log(parensValid("()( () ") )
  // EX. TRUE
  // EX. TRUE
  // EX. FALSE
  // EX. FALSE

function isPalindrome(string){

}

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "RACECAR" => TRUE