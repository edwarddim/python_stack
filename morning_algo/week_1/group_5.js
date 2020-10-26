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
