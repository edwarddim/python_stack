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