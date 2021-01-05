// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// EX. "Happy New Years" => "HNY"
// NOTE. YOU CAN USE .SPLIT() METHOD
var strName = "Edward Im"
var stringArr = strName.split(" ")
// ["Edward", "Im"]
function acronyms(string){  
    var string = string.split(" ")

    for (i < 0; i < string.length; i++){

    }
    
return stringArr;


// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string){

}
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string){
    counter = 0
    for (i = 0; i< string.length; i++){
        if (string[i] === "(") {
            counter++;
        }
        if (string[i] === ")") {
            counter--;
        }
        if (counter<0){
            return false;
        }
    }
    if (counter ==! 0){
        return false;
    }
    else {
        return true;
    }
}
console.log(parensValid("())(()"))

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    counter = 0
    for (i = 0; i< string.length; i++){
        if (string[i] === "(") {
            counter++;
        }
        else if (string[i] === ")") {
            counter--;
        }
        if (string[i] === "[") {
            counter++;
        }
        else if (string[i] === "]") {
            counter--;
        }
        if (string[i] === "{") {
            counter++;
        }
        else if (string[i] === "}") {
            counter--;
        }
        if (counter<0){
            return false;
        }
    }
    if (counter ==! 0){
        return false;
    }
    else {
        return true;
    }
}
console.log(bracesValid("({})[]"))
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
