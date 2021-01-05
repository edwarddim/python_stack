

// HINT. WE NEED A WAY TO KEEP TR   ACK OF OPENING AND CLOSING PARENS
function parensValid(string){
    //check ratio > ( needs )
    //for loop? iterate over the array and check that para are paired
    //use booleans? 
    var count = 0;
    for (var i = 0; i < string.length; i++) {
// ( = +1, ) = -1
    if (string[i] = "(" /* || "[" || "{"*/) {
        count+=1}
    else if (string[i] = ")" /* || "]" || "}" */) {
        count+= -1}
}
    if (count == 0) {
        console.log("True")}
    else {
        console.log("False")}
}
console.log(parensValid("I went (to the) mall( and then i ( did this))"))

// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE






function bracesValid(string){

}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//
