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
