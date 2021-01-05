
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
// var strName = "Edward Im"
// var stringArr = strName.split(" ")
// // ["Edward", "Im"]
// function acronyms(string){
  

// }
// // RETURN THE REVERSED STRING OF INPUT
// // EX. "HELLO" => "OLLEH"
// // NOTE. DO NOT USE ANY BUILT IN METHODS
// // NOTE. RETURN A NEW STRING
// function stringReverse(string){

// }

function parensValid(string){
    if (string.length % 2 == 0) {
        console.log(string.length)
        return true
    }    
    else {
        return false
    }     
}
console.log(parensValid("(())"))
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function funcRand(string){
    if (string.length%2 == 0){
        return true
    }
        else{
            return false
        }
    
}
