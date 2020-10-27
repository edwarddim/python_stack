// MON
// TURN THE INCOMING SENTENCE INTO AN ACRONYM
// EX. "Live From Saturday Night Live" => "LFSNL"
// NOTE. YOU CAN USE .SPLIT() METHOD
function acronyms(string){
    var stringArr = string.split(" ") // [ "Live", "From", "Saturday", "Night", "Live"]
    var newString = "";
    for (var i=0; i<stringArr.length; i++) {
        newString += stringArr[i][0];
    }
    return newString;
}
var string="Live From Saturday Night Live";
console.log(acronyms(string));

// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
function stringReverse(string){
    reverseString = "";
    for (var i=string.length-1; i>=0; i--) {
        reverseString += string[i];
    }
    return reverseString;
}

console.log(stringReverse("HELLO"));
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE
function parensValid(string){
    var countOpen = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "(") {
            countOpen++
        }
        if (string.charAt(i) === ")" && countOpen <= 0) {
            return false;
        }
        if (string.charAt(i) === ")") {
            countOpen--
        }
    }
    if (countOpen === 0) {
        return true
    } else {return false}
}
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()( () )" => TRUE
// EX. "( ()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE

function bracesValid(string){
    var parenOpen = 0;
    var squareOpen = 0;
    var squiglyOpen = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === "(") {
            parenOpen++
        }
        if (string.charAt(i) === ")" && parenOpen <= 0) {
            return false;
        }
        if (string.charAt(i) === ")") {
            parenOpen--
        }
        if (string.charAt(i) === "[") {
            squareOpen++
        }
        if (string.charAt(i) === "]" && squareOpen <= 0) {
            return false;
        }
        if (string.charAt(i) === "]") {
            squareOpen--
        }
        if (string.charAt(i) === "{") {
            squiglyOpen++
        }
        if (string.charAt(i) === "}" && squiglyOpen <= 0) {
            return false;
        }
        if (string.charAt(i) === "}") {
            squiglyOpen--
        }
    }
    if (parenOpen === 0 && squareOpen === 0 && squiglyOpen === 0) {
        return true
    } else {
        return false
    }
}
// (),[],{} => TRUE
// EX. "({})[]" => TRUE
// EX. " (}()[]" => FALSE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION