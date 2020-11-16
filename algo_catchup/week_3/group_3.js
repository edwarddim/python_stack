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

// function isPalindrome(string){
    
//     function isPalindrome(string){
    
//         for(var i = 0; i <string.length/2; i++){
//             if (string[i]!= string[string.length-1-i]){
//                 return false
//             }
//         }
//         return true
//     }
//     console.log(isPalindrome("Hello"))
//     console.log(isPalindrome("Kayak"))
//     console.log(isPalindrome("Racecar"))
//     console.log(isPalindrome("Bye"))

function isPalindrome(string){
    
    for(var i = 0; i <= string.length/2; i++){
        if (string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("hello"))
console.log(isPalindrome("kayak"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("bye"))

// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "RACECAR" => TRUE

function isAnagram(string1, string2){
        // RETURN THE REVERSED STRING OF INPUT
    var returnString = ""
        for (var i = string.length-1; i >= 0; i--){
          // why are we comparing the length of a string(number) to 
          // characters in a string(letters) ?
            if(returnstring[0] = returnstring.length[1]){
            console.log("True")
            }
            if (string.length[0] = string.length[1]){
            console.log("True")
            }
            else{
            console.log("False")
            }
        }
    }
    isAnagram("Peek", "Keep")
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