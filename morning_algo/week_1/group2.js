// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    var newString = ""
    for(var i = string.length - 1; i >= 0; i --){
        newString += string[i]
    }
    return newString
}
console.log(stringReverse("HELLO"))