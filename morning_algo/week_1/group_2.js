// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string){

}
// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string){

}






// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string){

    var obrace = 0
    for(var i=0;i<string.length;i++){
        if(string[i] == "("){
            obrace++
        }
        if(string[i] == ")"){
            if(obrace == 0){
                return false
            } else {
                obrace--
            }
        }
        console.log(obrace)
    }
    if (obrace == 0) {
        return true
    } else {
        return false
    }

}
console.log(parensValid("We're looking for (subtext)"))
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    var opren = 0
    var obrace = 0
    var obrack = 0
    for(var i=0;i<string.length;i++){
        if(string[i] == "("){
            opren++
        } else if (string[i] == "["){
            obrace++
        } else if (string[i] == "{"){
            obrack++
        }


        
        if(string[i] == ")"){
            if(opren == 0){
                return false
            } else {
                opren--
            }
        } else if(string[i] == "]"){
            if(obrace == 0){
                return false
            } else {
                obrace--
            }
        } else if(string[i] == "}"){
            if(obrack == 0){
                return false
            } else {
                obrack--
            }
        }


        console.log(opren)
        
    }
    if (opren == 0 && obrace == 0 && obrack == 0) {
        return true
    } else {
        return false
    }

}
console.log(bracesValid("{things} [inside] of (things)"))
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VA=LID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS