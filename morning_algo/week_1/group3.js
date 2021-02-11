// TUE
// HINT. WE NEED A WAY TO KEEP TRACK OF OPENING AND CLOSING PARENS
function parensValid(string) {
    // ITERATE THROUGH THE STRING
    for(i=0;i<string.length;i++){
    // CHECK IF THE CHARACTER IS OPEN OR CLOSED PARENS
        var opencount = 0;
        var closecount = 0;
        if (string[i] == "("){
            opencount++;
        }
        // else if
        else if(string[i] == ")"){
            closecount++;
        }

        
    }
    if (opencount == closecount){
        return true;
    }else{
        return false;
    } 
        // KEEP TRACK OF OPENING AND CLOSING PARENS
}
console.log(parensValid("((()))"));
// 1. IS THERE A CORRESPONDING CLOSING PAREN FOR EACH OPENING PAREN
// 2. ARE THE PAREN BEING OPENED BEFORE BEING CLOSED
// RETURN TRUE OR FALSE ON WHETHER THE STRING HAS APPROPRIATE CLOSING AND OPENING BRACES
// EX. "()(())" => TRUE
// EX. "(()()" => FALSE
// EX. "()()()" => TRUE
// EX. "())(()" => FALSE
// EX. ")))(((" => FALSE

function bracesValid(string) {
    let lifoStack = [];
    let stackToCompare = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    //if current iteration in stacktocompare, push to lifostack
    for(let i = 0;i<string.length;i++){
        if (string[i] === '(' || string[i] ==='[' || string[i] ==='{'){
            lifoStack.push(string[i]);
        }else{
            let compareKey = lifoStack.pop()
        }
    }
}
// (),[],{}
// EX. "({})[]" => TRUE
// TAKE PARENS VALID AND MAKE IT ACCOUNT FOR PARENS, SQUARE BRACKETS, AND SQUIGGLY BRACKETS
// WILL REQUIRE A STACK IMPLEMENTATION
// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

function isPalindrome(string) {
    // loop through first half of string incrementing by 1
    for (let i = 0; i < string.length/2; i++){
        // check if first index equals last index, 2nd vs 2nd to last and so on
        if (string[i] != string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "KAYAK" => TRUE
// "TACOCAT" => TRUE
// "DAD" => TRUE

function isAnagram(string1, string2) {
    // early exit comparing string lengths
    if (string1.length != string2.length){
        return false
    }
    // create an object to count characters and their frequencies
    charCounter = {};
    // loop throught the first string to count characters
    for (let i = 0; i < string1.length; i++){
        // check if character exists: if no add to charCounter, if yes add 1 to count
    }
}
// HINT: YOU WANT TO USE A OBJECT(DICTIONARY) TO KEEP TRACK OF CHARACTERS AND THEIR FREQUENCY
// RETURN TRUE OR FALSE DEPENDING ON WHETHER THE TWO WORDS ARE ANAGRAMS
// EX. "ATE", "TEA" => TRUE
// EX. "LISTEN", "SILENT" => TRUE
// EX. "LISTEN", "SILENZ" => FALSE
// EX. "DEER", "REDD" => FALSE