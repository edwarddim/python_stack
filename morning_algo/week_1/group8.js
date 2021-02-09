// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. DO NOT USE ANY BUILT IN METHODS
// NOTE. RETURN A NEW STRING
function stringReverse(string) {
  // CREATE AN EMPTY STRING TO CONCAT ANSWER TO
  let newStr = ""
  // ITERATE TRHOGUH EACH CHARCTER IN STRING IN REVERSE
  for (var i = string.length-1; i >= 0; i--) {
    // CONCAT EACH CHARACTER TO THE RETURN
    newStr += string.charAt(i)
  }
  return newStr
  // RETURN THE ANSWER
}
console.log(stringReverse("HELLO"))