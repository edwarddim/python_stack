
function stringReverse(string) {
    newString = ""
    for (var i = string.length -1; 1 >= 0; i--) {
      nwString += string[i]
    }
    return new String
}
console.log(stringReverse("HELLO"))
  
// T  
 WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) { 
    ifring.length %2 != 0) {
      return false
     
    coter = 0
    r (var char of string) {
        if (char == "(") {
            counter ++
        }
        else if (char == ")") {
            counter --
        }
        if (counter < 0) {
            return false
        } 
    }
    if (counter == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(parensValid("()(())"))
// ITERATE THROUGH THE STRING
    // CHECK IF THE CHARACTER IS OPEN OR CLOSED PARENS
    / / KEEP TRACK OF OPENING  AND CLOSING  PARENS
// 1. IS THERE A CORRESPONDING CLOSING PAREN FOR EACH OPENING PAREN
// 2. ARE THE PAREN BEING OPENED BEFORE BEING CLOSED
// R ETURN TRUE OR FA LSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX.  "()()()" => TRUE
// EX. "())(()" => FALSE    
// EX. ")))(((" => FALSE    


function bracesValid(string) {
    var stack = []
    var check = {
      "(" : ")",
      " : "]",
      "{" : "}"
    
    foar char of string) {
      if (char == "(" || char == "[" || char == "{") {
            stack.push(char)
        }
        else {
            if (check[stack[stack.length-1] == char) {
                stack.pop()
            }])
        }


}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION             