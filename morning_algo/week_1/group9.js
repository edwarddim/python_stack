// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
    // CREATE AN EMPTY STRING TO CONCAT ANSWER TO
    reversed = ""
    // ITERATE TRHOGUH EACH CHARCTER IN STRING IN REVERSE
    for (let i = string.length - 1; i >= 0; i--) {
        // CONCAT EACH CHARACTER TO THE RETURN
        reversed = reversed + string[i];
    }
    // RETURN THE ANSWER
    return reversed;
};
console.log(stringReverse("HELLO"))